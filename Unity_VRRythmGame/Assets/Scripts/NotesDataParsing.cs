using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.IO;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

public class NotesDataParsing
{
    // Get data from path and convert to Json type
    public static JObject getDataNconvert_Json(string path){
        JObject Jdata = new JObject();

        string strData = System.IO.File.ReadAllText(path);
        Jdata = JObject.Parse(strData);

        return Jdata;
    }

    // Get each BeatNote data and make notes data list
    public static List<BeatNoteClass> parse_data(JObject jdata)
    {
        List<BeatNoteClass> data = new List<BeatNoteClass>();

        JArray notes_data = JArray.Parse(jdata["_notes"].ToString());

        foreach(JObject e in notes_data)
        {
            BeatNoteClass temp = new BeatNoteClass();
            temp._time = (float.Parse(e["_time"].ToString()) / 125) * 60;
            temp._lineIndex = int.Parse(e["_lineIndex"].ToString());
            temp._lineLayer = int.Parse(e["_lineLayer"].ToString());
            temp._type = int.Parse(e["_type"].ToString());
            temp._cutDirection = int.Parse(e["_cutDirection"].ToString());
            data.Add(temp);
        }

        return data;
    }

    public static List<BeatNoteClass> parse_data2(JObject jdata)
    {
        List<BeatNoteClass> data = new List<BeatNoteClass>();
        

        JArray notes_data = JArray.Parse(jdata["_notes"].ToString());

        foreach(JObject e in notes_data)
        {
            BeatNoteClass temp = new BeatNoteClass();
            temp._time = float.Parse(e["_time"].ToString());
            temp._lineIndex = int.Parse(e["_lineIndex"].ToString());
            temp._lineLayer = int.Parse(e["_lineLayer"].ToString());
            temp._type = int.Parse(e["_type"].ToString());
            temp._cutDirection = int.Parse(e["_cutDirection"].ToString());
            data.Add(temp);
        }

        return data;
    }

    // 여기하는중
    public static List<BeatNoteClass> sortingMap(List<BeatNoteClass> d)
    {
        d.Sort(delegate(BeatNoteClass a, BeatNoteClass b)
        {
            if (a._time > b._time) return 1;
            else if (a._time < b._time) return -1;
            return 0;
        });

        return d;
    }
}
