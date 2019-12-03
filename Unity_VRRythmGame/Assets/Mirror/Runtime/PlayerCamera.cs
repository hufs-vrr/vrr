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
                Camera.main.transform.position = this.transform.position + new Vector3(0,2.7f,0.1f);
                Camera.main.transform.parent = this.transform;
            }
        }

        // Update is called once per frame
        void Update()
        {
            
        }
    }
}