using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class collider : MonoBehaviour
{

    void OnCollisionEnter(Collision col)
    {
        Debug.Log("1");
        if (col.collider.tag == "BeatNote")
            Debug.Log("충돌 감지");
    }

}
