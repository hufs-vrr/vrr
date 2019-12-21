using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Event : MonoBehaviour
{
    public void OnClickStartBtn()
    {
        Debug.Log("Clicked Start Btn");
        SceneManager.LoadScene("MultiGame");
    }

    public void OnClickOptionBtn()
    {
        Debug.Log("Click Option Btn");
    }
}