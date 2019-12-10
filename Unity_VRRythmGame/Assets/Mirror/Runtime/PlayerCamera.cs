using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Mirror
{
    public class PlayerCamera : NetworkBehaviour
    {
        // Start is called before the first frame update
        void Start()
        {
            if(isLocalPlayer)
            {

                Camera.main.transform.parent = findHead().transform;
                // Camera.main.transform.rotation = Quaternion.Euler(0,0,0);
            }
        }
        GameObject findHead()
        {
            GameObject Head = this.transform.Find("Character1_Reference").transform.Find("Character1_Hips").transform.Find("Character1_Spine").transform.Find("Character1_Spine1").transform.Find("Character1_Spine2").transform.Find("Character1_Neck").transform.Find("Character1_Head").gameObject;
            return Head;
        }

        void Update()
        {
            // Camera.main.GetComponent<Transform>().position = findHead().transform.position;
        }
    }
}