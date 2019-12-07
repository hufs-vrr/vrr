#!/usr/bin/env python
# coding: utf-8

# In[ ]:


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
        target = self.note_to_target()
        target = target[0]
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
        predict_to_note_time = self.predict_to_note_time()
        n = 0
        f = open('note2.txt','w')
        f.write('[')
        ml_lst = [0]*len(predict_to_note_time)
        while (n<len(predict_to_note_time)) :
            ml_note['_time'] = predict_to_note_time[n]
            ml_note['_lineIndex'] = 0#line_data2[n]
            ml_note['_lineLayer'] = 0#layer_data2[n]
            ml_note['_type'] = 0
            ml_note['_cutDirection'] = 0

            ml_lst[n] = ml_note
            f.write(str(ml_note))
            if n!=len(predict_to_note_time)-1:
                f.write(',')
            n+=1
        f.write(']')
        f.close()

