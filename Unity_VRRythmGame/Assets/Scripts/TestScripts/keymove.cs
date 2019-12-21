using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class keymove : MonoBehaviour
{

    // Update is called once per frame
    void Update()
    {
        if(Input.GetKey(KeyCode.LeftArrow)){
            transform.Translate(Vector3.left * 10 * Time.deltaTime);
        }
        if(Input.GetKey(KeyCode.RightArrow)){
            transform.Translate(Vector3.right * 10 * Time.deltaTime);
        }
        if(Input.GetKey(KeyCode.UpArrow)){
            transform.Translate(Vector3.up * 10 * Time.deltaTime);
        }
        if(Input.GetKey(KeyCode.DownArrow)){
            transform.Translate(Vector3.down * 10 * Time.deltaTime);
        }
    }
}
