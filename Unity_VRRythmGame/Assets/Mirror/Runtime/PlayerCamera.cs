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
<<<<<<< HEAD

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
=======
                Camera.main.transform.position = this.transform.position + new Vector3(0,2.7f,0.1f);
                Camera.main.transform.parent = this.transform;
            }
        }

        // Update is called once per frame
        void Update()
        {
            
>>>>>>> d1c3607ca05652511b7e7be9e9e7866d773bd161
        }
    }
}