using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NewBehaviourScript : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        if ( null == this.gameObject.transform.Find("asd")){
            Debug.Log("ok");
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
