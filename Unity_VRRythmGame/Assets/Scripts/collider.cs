using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Mirror{
    public class collider : NetworkBehaviour
    {
        bool check;
        void Start()
        {
            GameObject player = this.transform.root.gameObject;
            NetworkBehaviour Localplayercheck = player.GetComponent<NetworkBehaviour>();
            check = Localplayercheck.isLocalPlayer;
        }
        void OnCollisionEnter(Collision col)
        {
            if (col.collider.tag == "BeatNote")
            {
                Debug.Log("충돌 감지-----");
                if (check)
                {
                    Debug.Log("1");
                    PlayerScore.count += 1;
                }
            }
        }

    }
}