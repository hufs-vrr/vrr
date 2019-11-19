using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BeatNoteSetting : MonoBehaviour
{
    private double time;
    private int lineLayer;
    private int lineIndex;
    private int type;

    public double Time
    {
        get{ return time; }
        set{ time = value;}
    }
    public int LineLayer
    {
        get{ return lineLayer; }
        set{ lineLayer = value;}
    }
    public int LineIndex
    {
        get{ return lineIndex; }
        set{ lineIndex = value;}
    }
    public int Type
    {
        get{ return type;}
        set{ type = value;}
    }

    public static Vector3 convertPos(Vector3 pos)
    {
        float ratio = 0.6666f;
        float diff = (3 * ratio) / 2;
        var convert_pos = new Vector3((pos.x * ratio) - diff, pos.y + 1, pos.z);

        return convert_pos;
    }

    public void postion_note(){
        if (lineIndex == 0) {
            if (lineLayer == 0)
                transform.Translate(-2,0,50);
            else if (lineLayer == 1)
                transform.Translate(-2,2,50);
            else if (lineLayer == 2)
                transform.Translate(-2,4,50);
            else if (lineLayer == 3)
                transform.Translate(-2,6,50);
            else
                Debug.Log("This is wrong lineLayer");
        }
        else if (lineIndex == 1) {
            if (lineLayer == 0)
                transform.Translate(0,0,50);
            else if (lineLayer == 1)
                transform.Translate(0,2,50);
            else if (lineLayer == 2)
                transform.Translate(0,4,50);
            else if (lineLayer == 3)
                transform.Translate(0,6,50);
            else
                Debug.Log("This is wrong lineLayer");
        }
        else if (lineIndex == 2) {
            if (lineLayer == 0)
                transform.Translate(2,0,50);
            else if (lineLayer == 1)
                transform.Translate(2,2,50);
            else if (lineLayer == 2)
                transform.Translate(2,4,50);
            else if (lineLayer == 3)
                transform.Translate(2,6,50);
            else
                Debug.Log("This is wrong lineLayer");
        }
        else
            Debug.Log("This is wrong lineIndex");
    }
    void start(){
        
    }
}
