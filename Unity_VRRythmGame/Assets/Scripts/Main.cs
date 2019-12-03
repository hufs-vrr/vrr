using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Main : MonoBehaviour
{
    public static float speed = 5.0f;                          // Note speed
    public GameObject note = null;                      // UI note(prefab) 
    public string path = "C:\\Users\\aurea\\Desktop\\Expert.dat";
    // public string path = "C:\\Users\\aurea\\Desktop\\note2.txt";
    int index = 0;   
    List<GameObject> notes = new List<GameObject>();    // Save created notes for move
    List<BeatNoteClass> data = new List<BeatNoteClass>();   // NoteMap data
    private float time;
    


    void Start()
    {
        // Set BeatNoteMap
        Debug.Log(path);
        data = NotesDataParsing.parse_data(NotesDataParsing.getDataNconvert_Json(path));
        data = NotesDataParsing.sortingMap(data);
    }
    
    // for create beatNote
    Vector3 newpos;
    void Update()
    {
        // start timer when this object created
        time += Time.deltaTime;
        // Make note at time
        if (index < data.Count){
            if(data[index]._time < time){
                newpos = BeatNoteSetting.convertPos(new Vector3(this.transform.position.x + data[index]._lineIndex, this.transform.position.y + data[index]._lineLayer,this.transform.position.z + -800));
                notes.Add(Instantiate(note, newpos, Quaternion.identity));
                index++;
            }
        }

        // Move notes per time
        // if (notes != null){
        //     BeatNote.move(notes, speed);
        // }   
    }
}