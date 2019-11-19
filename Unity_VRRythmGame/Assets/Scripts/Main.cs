using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Main : MonoBehaviour
{
    public float speed = 5.0f;                          // Note speed
    public GameObject note = null;                      // UI note(prefab) 
    public string path = "C:\\Users\\aurea\\Desktop\\Expert.dat";
    int index = 0;   
    List<GameObject> notes = new List<GameObject>();    // Save created notes for move
    List<BeatNoteClass> data = new List<BeatNoteClass>();   // NoteMap data
    


    void Start()
    {
        data = NotesDataParsing.parse_data(NotesDataParsing.getDataNconvert_Json(path));
        data = NotesDataParsing.sortingMap(data);
    }

                                        // for create beatNote

    Vector3 newpos;
    void Update()
    {   
        // Make note at time
        if (index < data.Count){
            if(data[index]._time < Time.time){
                newpos = BeatNoteSetting.convertPos(new Vector3(data[index]._lineIndex,data[index]._lineLayer,-1000));
                Debug.Log(data[index]._time);
                notes.Add(Instantiate(note, newpos, Quaternion.identity));
                index++;
            }
        }

        // Move notes per time
        if (notes != null){
            BeatNote.move(notes, speed);
        }   
    }
}