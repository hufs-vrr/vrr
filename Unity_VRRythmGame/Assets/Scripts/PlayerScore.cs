using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class PlayerScore : MonoBehaviour
{
    public static int count;
    public Text mytext;

    // Start is called before the first frame update
    void Start()
    {
        mytext.text = "0";
        count = 0;
    }

    // Update is called once per frame
    void Update()
    {
        mytext.text = count.ToString();
    }
}
