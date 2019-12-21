# <p align="center">사업계획서</p>
![python](https://img.shields.io/badge/Python-numpy-blue?logo=Python)
![Unity](https://img.shields.io/badge/Oculus-Unity-yellow?logo=Unity)
![React](https://img.shields.io/badge/React-Frontend-fb5d65?logo=React)
![Node.js](https://img.shields.io/badge/Node.js-Javascript-48d1cc?logo=Node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-NoSQL-b6e0c6?logo=MongoDB)
![Ubuntu](https://img.shields.io/badge/Ubuntu-Server-red?logo=Ubuntu)

### <p align="center">VR Rhythm Game Beat Maker Using Deep Learning</p><p align="center"><span style="color:#0064FF">VRR</span></p>    

#### <p align="center">Ver. 1.0</p>
#### <p align="center">2019.10.01</p>    
#### <p align="center">한국외국어대학교</p>
#### <p align="center">정보통신공학과</p>
#### <p align="center">VRR Team</p>

**<p align="center">박영준 문명기 김세진 이호찬 조동철</p>**     

***
#### <p align="center"><u>머리말</u></p>
<p align="center">본 문서는 VRR 플랫폼에 대한 사업계획서에 대한 내용을 설명합니다.</p>

#### ?? Index

> ###### 1. 서비스
>> ######   1-1 [서비스 개요](#서비스-개요)
>> ######   1-2 [서비스 기획 배경](#서비스-기획-배경)
>> ######   1-3 [서비스 소개](#서비스-소개)
> ###### 2. 기술
>>  ######  2-1 [기술 소개](#기술-소개)
> ###### 3. 시장
>>  ######  3-1 [시장 동향](#시장-동향)
>>  ######  3-2 [사업 구조](#사업-구조)
>>  ######  3-3 [수익](#수익)
> ###### 4. 계획
>>  ######  4-1 [향후 추진 계획](#향후-추진-계획)
>>  ######  4-2 [업무분담](#업무분담)
>>  ######  4-3 [주차 별 개발 계획](#주차-별-개발-계획)

***

![img](/img/img1.PNG)

</br>

#### 서비스 개요

 - **VRR이란?**

 ![img](/img/vrr.PNG)
</br>
    VR과 Kinect 모션인식을 통한 비트게임과 Auto Beat Note Mapping 서비스, 공유 플랫폼을 웹으로 제공한다
</br>
</br>

#### 서비스 기획 배경
 - **리듬 게임을 2인용으로 경쟁하며 즐길 수 는 없을까?**
</br>
    리듬게임은 1인용으로 진행되거나 2인용이지만 점수를 경쟁하는 형태입니다. 저희 VRR팀은 더 재미있는 경쟁 구도를 리듬게임에 적용하면 재미있을 것 같았습니다.    
</br>
</br>

 - **리듬 게임의 노트 생성 비효율 개선할 방법?**
</br>
    초창기부터 현재까지 꾸준히 인기를 끌고 있는 리듬게임은 Play하기 위해서 Note가 꼭 필요합니다. 하지만 이를 여전히 이 Note생성을 사람이 직접 수동으로 만든다는 비효율을 개선할 방법이 있을지 고민했습니다.
</br>
</br>

***

#### 서비스 소개
 -  **:mag: 웹 플랫폼**

 ![img](/img/platform.PNG)
 </br>
    고객들은 kit에 대한 고유 고유의 license 번호를 받게 되며 웹 플랫폼에 Login하여 VRR Play 기록과 고객이 생성하여 저장된 자신만의 Beat Note를 확인할 수 있다    
</br>

 -   **:video_game: VR 리듬게임**

 ![img](/img/unity.PNG)
 </br>
 VR 기기를 착용하고 Kinect로 인식된 Player가 Unity UI를 통해 로그인하고 Play하고 싶은 곡을 선택 후 VR 리듬게임을 즐긴다    
</br>

  -   **:musical_score: Auto Beat Node Mapping**

  ![img](/img/deeplearning.PNG)
  </br>
  자신이 Play 하고 싶은 곡이 없으면 Auto Beat Note Making 기능을 이용해 음원을 집어넣어 자동으로 생성된 Note를 웹 플랫폼에 저장하고 직접 Play하거나 다른 Player와 공유할 수 있다.
</br>

  -  **구성도**

![img](/img/architecture.PNG)
</br>
</br>

***

#### 기술 소개
##### VR
<img width="150" height="150">![img](/img/technology01.PNG)</img>
* Virtual Reality의 약자로 '가상현실'이라는 뜻
* 만들어 놓은 가상의 세계에서 사람이 실제와 같은 체험을 할 수 있도록 하는 기술
* 높은 몰입감으로 게임과 같은 엔터테인먼트 분야가 가장 발전해 있다.
>VR은 사용자의 시야에 꽉 찬 display를 제공해 더욱 높은 현장감과 몰입감을 줄 수 있다

</br>
##### Kinect
<img width="150" height="150">![img](/img/technology02.PNG)</img>
* RGB센서와 IR센서를 이용한 3차원 
* 인식 인체의 주요 골격 위치 데이터 제공
* 내장 마이크로 음성 인식
> Kinect는 인체의 25개의 주요 골격 위치를 인식하여, 인식된 골격 위치 데이터를 제공 해주기 때문에 사람의 전체적인 행동 및 움직임을 알 수 있다.     
_**Gesture recognition**_ : 사람 몸의 움직임을 인식해 기계와 상호작용

</br>
##### VRR : Kinect & VR 기술 결합
![img](/img/unity+kinect.gif)
<img width="350" height="150">![img](/img/technology03.PNG)</img>
> 리듬게임을 더욱 재미있게 Play 하기위해 주기적으로 벽을 생성해 Kinect를 통한 Gesture recognition 기능으로 벽을 피하는 게임적 요소를 추가하였다.

</br>
##### Deep learning
![img](/img/technology04.PNG)
</br>
* 지도학습은 정답이 주어진 상태에서 학습하는 알고리즘을 의미
* 입력 값과 정답을 포함한 Training Data를 이용하여 학습
* 그 학습된 결과를 바탕으로 미지의 데이터에 대해 미래 값을 예측하는 방법
> VRR은 Note를 생성하는 과정에 필요한 Data를 전처리한 후 Model이 학습하여 새로운 Beat Note를 자동으로 제작할 수 있다.

***

#### 시장 동향
</br>
![img](/img/marketTrends2.PNG)
```bash
| [시장동향 자료 1] TrendForce  
```
```bash
| [시장동향 자료 2] Digi-capital, NH투자증권 WM리서치부
```
###### VR기기가 보급되면서 콘텐츠 성장도 더욱 빨라질 전망이며, 2020년?VR?콘텐츠 시장의 절반 이상을?VR?게임이 차지할 것으로 전망하고 있어?현재 많은 게임업체들이?VR?게임을 개발 중에 있으며, VR?게임을 개발하는 업체들도 지속적으로 증가할 것으로 전망
</br>

![img](/img/marketTrends3.PNG)
```bash
| [시장동향 자료 3] 인사이터스 (VR 기술 응용 산업)  
```
###### VR 기술은 몰입감을 높여줄 수 있는 모든 분야에 응용 가능하며, 현재 게임시장에서 가장 활발히 확장되고 있다. 크게 게임, 교육, 의료, 영상, 방송/광고, 제조/산업 분야에 적용되며 세부 분야는 아래와 같다.
</br>

![img](/img/marketTrends4.PNG)
```bash
| [시장동향 자료 4] NH투자증권 WM리서치부
```
![img](/img/marketTrends5.PNG)
```bash
| [시장동향 자료 5] 인사이터스, VRR 가공 (VR 선도 기업 현황)
```
###### 대기업들도 상기 표와 국내 선도 기업들은 아직 이익이 발생하지 않은 초기 스타트업들을 대상으로 활발한 인수합병(M&A)을 진행하여 VR 산업으로 뛰어들고 있으며, 앞 다투어 기술 개발과 신제품 출시에 박차를 가하고 있다.
</br>

***

#### 사업 구조
</br>

![img](/img/businessModel.PNG)
</br>

#### 수익
</br>

***

![img](/img/profit.PNG)
</br>

#### 향후 추진 계획
</br>

![img](/img/plan.PNG)
![img](/img/plan2.PNG)

</br>

#### 업무분담
</br>

![img](/img/role.PNG)
</br>

#### 주차 별 개발 계획
</br>

![img](/img/devplan.PNG)