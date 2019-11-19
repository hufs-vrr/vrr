# -*- coding: utf-8 -*-
"""lstm.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1ZjoabSwsVMI7qii1F1sytIrwh5OX-9MH
"""

from sklearn.model_selection import train_test_split
from keras.models import Sequential
from keras.layers import Conv2D, MaxPooling2D
from keras.layers import LSTM, Reshape
from keras.layers import Dense, Dropout, Activation, Flatten

model = Sequential()
model.add(Conv2D(1,(1,1), activation= 'relu', padding = 'same', input_shape =(80,3,1)))
model.add(MaxPooling2D((8,1)))
model.add(Flatten())
model.add(Reshape((1,30)))
model.add(LSTM(32,batch_input_shape=(None,14,3),return_sequences=True))
model.add(Dropout(0.25))
model.add(Flatten())
model.add(Dense(32, activation='sigmoid'))
model.add(Dense(3, activation='sigmoid')) 
model.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])
model.build((None,80,3,1))
model.summary()

from sklearn.model_selection import train_test_split
from keras.models import Sequential
from keras.layers import Conv2D, MaxPooling2D
from keras.layers import LSTM
from keras.layers import Dense, Dropout, Activation, Flatten

model2 = Sequential()
model2.add(Conv2D(10,(1,1), activation= 'relu', padding = 'same', input_shape =(552,80,3)))
model2.add(MaxPooling2D((8,8)))
model2.add(Conv2D(20,(6,1), activation= 'relu', padding = 'same', input_shape =(64,10,20)))
model2.add(MaxPooling2D((8,1)))
model2.add(Flatten())
model2.add(Reshape((8,200)))

model2.add(LSTM(128,batch_input_shape=(None,2,3),return_sequences=True))
model2.add(Flatten())
model2.add(Dense(128, activation='sigmoid'))
model2.add(Dense(3, activation='sigmoid'))
model2.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])
model2.build((552,80,3))
model2.summary()
