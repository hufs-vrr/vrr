using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BeatNote : MonoBehaviour
{
    // private List<GameObject> beatNoteMap = new List<GameObject>();
    private static bool iscollision = false;

    void OnCollisionEnter(Collision col)
    {
        // Debug.Log("1");
        if(col.collider.tag == "Player")
        {
            Debug.Log("충돌 감지");
            iscollision = true;     // 충돌 상태
            this.gameObject.GetComponent<Rigidbody>().useGravity = true;        // 충돌후 중력 작용
            this.gameObject.GetComponent<Rigidbody>().AddForce(new Vector3(0,0,-10), ForceMode.Impulse);    // 충돌후 충돌 반대방향으로 팅겨남
            this.gameObject.GetComponent<Collider>().enabled = !this.gameObject.GetComponent<Collider>().enabled;   // 충돌후 충돌component 제거
            iscollision = false;    // 충돌 상태 종료
            Destroy(this.gameObject, 1.0f);
        }
    }

    void OnCollisionExit(Collision col)
    {
        // Debug.Log("2");
        if(col.collider.tag == "Player")
        {
            Debug.Log("충돌 종료");
            iscollision = false;

        }
    }

    public static void move(List<GameObject> notes,float speed)
    {
        foreach(var n in notes)
        {
            if (n.transform.position.z > -20)
            {
                if (iscollision == false)       // 충돌상태 아닐 경우만 발생
                    n.transform.Translate(0, 0, speed*Time.deltaTime);
            }
            else if (n.transform.position.z <= -20)
            {
                n.transform.Translate(0, 0, 500*Time.deltaTime);
            }
        }
    }

    public static void move(GameObject n,float speed)
    {
        if (n.transform.position.z >= -20)
        {
            if (iscollision == false)       // 충돌상태 아닐 경우만 발생
                n.transform.Translate(0, 0, speed*Time.deltaTime);
        }
        else if (n.transform.position.z < -20)
        {
            n.transform.Translate(0, 0, 950*Time.deltaTime);
        }
    }

    public void destroynote(GameObject n)
    {
        if(n.transform.position.z > 20)
        {
            Destroy(this.gameObject, 1.0f);
            Debug.Log("check destroy");
        }
    }

    void FixedUpdate()
    {
        move(this.gameObject, Main.speed);
        destroynote(this.gameObject);
    }
}
