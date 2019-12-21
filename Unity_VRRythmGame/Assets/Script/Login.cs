using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Login : MonoBehaviour
{
    [SerializeField] private InputField inputId;
    [SerializeField] private InputField inputPassword;

    // private string currentText;
 
    public void Input()
    {
        Debug.Log(inputId.text);
        Debug.Log(inputPassword.text);
    }

}
