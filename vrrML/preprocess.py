#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import librosa
import librosa.display
import numpy as np
import matplotlib.pyplot as plt

class Preprocess:
    def __init__(self, music):
        self.music = music
        
    def stft(self, music, n_fft_size):
        self.music = music
        samples, sample_rate = librosa.load(path= music, sr = 44100, mono = True, duration = 3)
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

        for i in range(1,int(len(melscale_data[0])/2)):
            channel_one = [melscale_data[0][i]]
            channel_two = [melscale_data[1][i]]
            channel_three = [melscale_data[2][i]]
            tmp = np.vstack((channel_one, channel_two, channel_three))
            new_T = np.vstack((new_T,[tmp]))
        return new_T

