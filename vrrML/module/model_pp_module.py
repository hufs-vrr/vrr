#!/usr/bin/env python
from random import *
from sklearn.model_selection import train_test_split
from keras.models import Sequential
from keras.layers import Conv2D, MaxPooling2D
from keras.layers import LSTM
from keras.layers import Dense, Dropout, Activation, Flatten, Reshape

import tensorflow as tf
import librosa
import librosa.display
import numpy as np
import matplotlib.pyplot as plt

####예측을 위한 모듈####
class Target:
    def __init__(self,note):
        self.note = note

    def note_to_target(self):   #노트데이터를 타깃 데이터로
        time_data = []
        line_data = []
        layer_data = []
        for i in self.note:
            if i['_time']<=len(self.note):
                time_data += [int(round(i['_time'],0))]
                line_data += [i['_lineIndex']]
                layer_data += [i['_lineLayer']]

        not_encode_data = [0]*len(time_data)
        for i in time_data:
            not_encode_data[int(i)-1]+=1
        return not_encode_data,line_data,layer_data

    def predict_to_note_time(self):   #예측 데이터를 시간 관련 데이터로
        target = self.note#self.note_to_target()
        ##target = target[0]
        note = []
        n = 0
        print(len(target))
        while n<len(target):
            if target[n] ==2:
                note+=[n+1]
                note+=[n+1]
                n+=1
            elif target[n] ==1:
                note+=[n+1]
                n+=1
            else: n+=1
        return note

    def time_to_note(self):
        predict_to_note_time = self.predict_to_note_time()#self.note#self.predict_to_note_time()
        n= 0
        f = open('./note/note.txt','w')
        f.write('{"_notes":')
        f.write('[')
        ml_lst = [0]*len(predict_to_note_time)
        ml_note = {}
        while (n<len(predict_to_note_time)) :
            if n%7==0:
                ml_note['_time'] = predict_to_note_time[n]
                ml_note['_lineIndex'] = n%3 #randint(0,2)#line_data2[n]
                ml_note['_lineLayer'] = randint(0,n%3)#layer_data2[n]
                ml_note['_type'] = 0
                ml_note['_cutDirection'] = 0

                ml_lst[n] = ml_note
                f.write(str(ml_note))
                f.write(',')#if n!= (len(predict_to_note_time)//7):#len(predict_to_note_time)-1:
                    #f.write(',')
            n+=1
        ml_note['_time'] = 8
        ml_note['_lineIndex'] = 0
        ml_note['_lineLayer'] = 0
        ml_lst[n-1] =ml_note
        f.write(str(ml_note))
        f.write(']')
        f.write('}')
        f.close()

class Preprocess:
    def __init__(self, music):
        self.music = music

    def stft(self, music, n_fft_size):
        self.music = music
        samples, sample_rate = librosa.load(path= music, sr = 44100, mono = True, duration = 160) #40
        D = np.abs(librosa.stft(samples, n_fft=n_fft_size,  hop_length=160))
        return D

    def mel_scale(self):
        data = [0]*3
        channel = self.three_channel()
        for k in range(0,len(channel)):
            T = np.transpose(channel[k])
            mfccs = np.matrix(librosa.feature.mfcc(y = T[0], n_mfcc=80))
            mel_scale = np.transpose(mfccs)
            for i in range(1,len(T)):
                mfccs = librosa.feature.mfcc(y = T[i], n_mfcc=80)
                mfccs_t = np.transpose(mfccs)
                mel_scale = np.vstack((mel_scale, mfccs_t))
            arr = np.array(mel_scale)
            data[k] = arr.tolist()
        return data

    def three_channel(self):
        #368, 736,1488
        music = self.music
        D1 = self.stft(music,368)
        D2 = self.stft(music,736)
        D3 = self.stft(music,1488)
        #return len(D1),len(D2), len(D3)
        return [D1,D2,D3]

    def preprocess_output(self):
        melscale_data = self.mel_scale()
        channel_one = [melscale_data[0][0]]
        channel_two = [melscale_data[1][0]]
        channel_three = [melscale_data[2][0]]

        T = np.vstack((channel_one, channel_two, channel_three))
        tmp = np.vstack((channel_one, channel_two, channel_three))
        new_T = np.vstack(([T],[tmp]))

        for i in range(1,int(len(melscale_data[0]))):
            if i%64 ==0: #default16 #80_32, 160_64
                channel_one = [melscale_data[0][i]]
                channel_two = [melscale_data[1][i]]
                channel_three = [melscale_data[2][i]]
                tmp = np.vstack((channel_one, channel_two, channel_three))
                new_T = np.vstack((new_T,[tmp]))
        return new_T


model = Sequential()
model.add(Conv2D(1,(1,1), activation= 'relu', padding = 'same', input_shape =(80,3,1)))
model.add(MaxPooling2D((8,1)))
model.add(Flatten())
model.add(Reshape((1,30)))
model.add(LSTM(112,batch_input_shape=(None,14,3),return_sequences=True))
model.add(Dropout(0.25))
model.add(Flatten())
model.add(Dense(32, activation='sigmoid'))
model.add(Dense(3, activation='sigmoid'))
model.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])
model.build((None,80,3,1))
model.summary()

p = Preprocess('./music/1/Psy-Daddy/Psy-Daddy.wav')     #음악파일 들어가는 곳
output = p.preprocess_output()
inp = output[0:690]
note_time = [0, 0, 0, 0, 2, 2, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1]
note_line = [2, 1, 3, 1, 0, 2, 0, 3, 1, 2, 1, 0, 0, 1, 2, 3, 0, 2, 3, 1, 2, 0, 3, 1, 3, 1, 3, 1, 1, 0, 3, 2, 2, 3, 3, 1, 0, 3, 1, 2, 2, 1, 0, 3, 1, 2, 0, 1, 1, 0, 2, 0, 2, 1, 1, 2, 3, 3, 2, 2, 3, 0, 1, 2, 1, 0, 3, 1, 2, 0, 3, 2, 1, 1, 2, 3, 1, 2, 3, 0, 1, 2, 1, 3, 2, 0, 2, 1, 3, 1, 2, 2, 1, 1, 2, 2, 0, 3, 1, 2, 0, 3, 1, 2]
note_layer = [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0]
#split을 위해 임의로 들어가는 시간 값


y_time =[0]*690
num = 0
idx = 0
while num<690:
  if num% 9 ==0:
    y_time[num] = note_time[idx]
    idx+=1
    num+=1
  else:
    y_time[num] = note_time[idx]
    num+=1
inp = np.array(inp)
x_train, x_val, y_train, y_val = train_test_split(inp,y_time, stratify=y_time, test_size =0.2) #, random_state =42)
y_train_encoded = tf.keras.utils.to_categorical(y_train)
y_val_encoded = tf.keras.utils.to_categorical(y_val)
print(x_train.shape, x_val.shape)
x_train = x_train.reshape(-1,80,3,1)
x_val = x_val.reshape(-1,80,3,1)
print(x_train.shape, x_val.shape)

history = model.fit(x_train, y_train_encoded,batch_size = 30,epochs=20,validation_data = (x_val,y_val_encoded))

z = model.predict(x_train)
z = z.tolist()
lst = []
for i in z:
  lst += [i.index(max(i))]

predict = lst
#a = Target(note_data_)
#t = a.note_to_target()

#a.time_to_note()



a = Target(predict)
a.predict_to_note_time()
a.time_to_note()
