## <span style="color:purple">MarkDown</span> 문법 가이드 라인 
- - -
> <strong> About word </strong>
-  [글자크기](#글자크기)
- [글자특성](#글자특성)
- [글자색상](#글자색상)
- [띄어쓰기](#띄어쓰기)
- [리스트](#리스트)
- [인용문](#인용문)
- [코드](#코드)
- [주석](#주석)
> <strong> Else </strong>
- [링크 참조](#링크참조)
- [수평선](#수평선)
- [제목](#제목)
- [Badge](#뱃지)
- [이모티콘](#이모티콘)
> <strong>참고문서</strong>

https://github.github.com/gfm/
http://www.hakawati.co.kr/405

> Last edited by Hochan ( 2019.10.02 )

`` *변경 사항 적용 후에 위에 이름과 날짜 갱신해 주세요! ``
- - - 

#### 수평선
```alias
* * *

***

*****

- - -

---------------------------------------
```
* * *
***
*****
- - -
---------------------------------------

#### 제목
```alias
This is an H1
=============
```
This is an H1
=============

```alias
This is an H2
-------------
```
This is an H2
-------------

#### 링크참조
```alias
[sample include file](../includes/sampleinclude.md)
- [macOS](../docs/core/tutorials/using-on-macos.md)
- [Windows](../docs/core/tutorials/with-visual-studio.md)
```
[sample include file](../includes/sampleinclude.md)
- [macOS](../docs/core/tutorials/using-on-macos.md)
- [Windows](../docs/core/tutorials/with-visual-studio.md)

```alias
<http://example.com/>
<address@example.com>
[![Vue](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png)](https://kr.vuejs.org/)
```
<http://example.com/>
<address@example.com>
[![Vue](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png)](https://kr.vuejs.org/)

#### 바로가기
```alias
[바로가기 보여지는 이름](#바로가기글자)
```
[바로가기 보여지는 이름](#바로가기글자)

#### 띄어쓰기
```alias
동해물과 백두산이 마르고 닳도록 
하느님이 보우하사 우리나라 만세   <!--띄어쓰기 2번-->
무궁화 삼천리 화려 강산<br>
대한 사람 대한으로 길이 보전하세
```
동해물과 백두산이 마르고 닳도록 
하느님이 보우하사 우리나라 만세   <!--띄어쓰기 2번-->
무궁화 삼천리 화려 강산<br>
대한 사람 대한으로 길이 보전하세

#### 글자크기
```alias
# This is heading 1
## This is heading 2
### This is heading 3
#### This is heading 4
##### This is a H5
###### This is a H6
```
# This is heading 1
## This is heading 2
### This is heading 3
#### This is heading 4
##### This is a H5
###### This is a H6

#### 글자특성
```alias
1. This text is **bold**.
2. This text is *italic*.
3. This is text is both ***bold and italic***.
4. _single underscores_
5. __double underscores__
6. ~~cancelline~~
7. <u>밑줄</u>
8. `background` 가나다라
9. <em>single asterisks</em>
10. <em>single underscores</em>
11. <strong>double asterisks</strong>
12. <strong>double underscores</strong>
```
1. This text is **bold**.
2. This text is *italic*.
3. This is text is both ***bold and italic***.
4. _single underscores_
5. __double underscores__
6. ~~cancelline~~
7. <u>밑줄</u>
8. `background` 가나다라
9. <em>single asterisks</em>
10. <em>single underscores</em>
11. <strong>double asterisks</strong>
12. <strong>double underscores</strong>

#### 인용문
```alias
> The drought had lasted now for ten million years, and the reign of the terrible lizards had 
>> 중첩된 인용문(nested blockquote)을 만들 수 있습니다.
>>> 중중첩된 인용문 1
```
> The drought had lasted now for ten million years, and the reign of the terrible lizards had long since ended. Here on the Equator, in the continent which would one day be known as Africa, the battle for existence had reached a new climax of ferocity, and the victor was not yet in sight. In this barren and desiccated land, only the small or the swift or the fierce could flourish, or even hope to survive.
>> 중첩된 인용문(nested blockquote)을 만들 수 있습니다.
>>> 중중첩된 인용문 1

#### 코드
```alias
A backtick-delimited string in a code span: `` `foo` ``
`&#8212;` is the decimal-encoded equivalent of `&mdash;`.
```
A backtick-delimited string in a code span: `` `foo` ``
`&#8212;` is the decimal-encoded equivalent of `&mdash;`.

#### 리스트
```alias
* 빨강
  * 녹색
    * 파랑

+ 빨강
  + 녹색
    + 파랑

- 빨강
  - 녹색
    - 파랑
```
* 빨강
  * 녹색
    * 파랑

+ 빨강
  + 녹색
    + 파랑

- 빨강
  - 녹색
    - 파랑

```alias
- List item 1
- List item 2
- List item 3
  - List item A
  - List item B
```
- List item 1
- List item 2
- List item 3
  - List item A
  - List item B

```alias
1. First instruction
1. Second instruction
1. Third instruction
```
1. First instruction
1. Second instruction
1. Third instruction

#### 표(Table)
```alias
| Fun                  | With                 | Tables          |
| :------------------- | -------------------: |:---------------:|
| left-aligned column  | right-aligned column | centered column |
| $100                 | $100                 | $100            |
| $10                  | $10                  | $10             |
| $1                   | $1                   | $1              |
```

| Fun                  | With                 | Tables          |
| :------------------- | -------------------: |:---------------:|
| left-aligned column  | right-aligned column | centered column |
| $100                 | $100                 | $100            |
| $10                  | $10                  | $10             |
| $1                   | $1                   | $1              |

#### 글자색상
```alias
<span style="color:red">내용</span>
<span style="color:orange">내용</span>
<span style="color:#efefef">내용</span>
<span style="color:#0027ef">내용</span>
<span style="color:green">내용</span>
```

<span style="color:red">내용</span>
<span style="color:orange">내용</span>
<span style="color:#efefef">내용</span>
<span style="color:#0027ef">내용</span>
<span style="color:green">내용</span>

#### 뱃지
https://github.com/Naereen/badges

#### 주석
> 주석은 직접 수정 눌러서 코드를 보세요!

```alias
...
your code goes in here
...
```

```csharp
// Hello1.cs
public class Hello1
{
    public static void Main()
    {
        System.Console.WriteLine("Hello, World!");
    }
}
```

```sql
CREATE TABLE T1 (
  c1 int PRIMARY KEY,
  c2 varchar(50) SPARSE NULL
);
```

```javascript
function func() {
  var a = 'AAA';
  return a;
}
```
```html
<a href="https://www.google.co.kr/" target="_blank">GOOGLE</a>
```

```css
.list > li {
  position: absolute;
  top: 40px;
}
```
```bash
$ vim ./~zshrc
```

```python
s = "Python syntax highlighting"
print s
```

#### 이모티콘
> 이모티콘말고 세부 코드는 이 링크로! https://gist.github.com/rxaviers/7360908

😄 😆 😊 😃 ☺️ 😏 😍 😘 😚 😳 😌 😆 😁 😉 😜 😝 😀 😗 😙 😛 😴 😟 😦 😧 😮 😬 😕 😯 😑 😒 😅 😓 😥 😩 😔 😞 😖 😨 😰 😣 😢 😭 😂 😲 😱 😫 😠 😡 😤 😪 😋 😷 😎 😵 👿 😈 😐 😶 😇 👽 💛 💙 💜 ❤️ 💚 💔 💓 💗 💕 💞 💘 💖 ✨ ⭐️ 🌟 💫 💥 💥 💢 ❗️ ❓ ❕ ❔ 💤 💨 💦 🎶 🎵 🔥 💩 💩 💩 👍 👍 👎 👎 👌 👊 👊 ✊ ✌️ 👋 ✋ ✋ 👐 ☝️ 👇 👈 👉 🙌 🙏 👆 👏 💪 🤘 🖕 🚶 🏃 🏃 👫 👪 👬 👭 💃 👯 🙆 🙅 💁 🙋 👰 🙎 🙍 🙇 💑 💆 💇 💅 👦 👧 👩 👨 👶 👵 👴 👱 👲 👳 👷 👮 👼 👸 😺 😸 😻 😽 😼 🙀 😿 😹 😾 👹 👺 🙈 🙉 🙊 💂 💀 🐾 👄 💋 💧 👂 👀 👃 👅 💌 👤 👥 💬 💭

☀️ ☔️ ☁️ ❄️ ⛄️ ⚡️ 🌀 🌁 🌊 🐱 🐶 🐭 🐹 🐰 🐺 🐸 🐯 🐨 🐻 🐷 🐽 🐮 🐗 🐵 🐒 🐴 🐎 🐫 🐑 🐘 🐼 🐍 🐦 🐤 🐥 🐣 🐔 🐧 🐢 🐛 🐝 🐜 🐞 🐌 🐙 🐠 🐟 🐳 🐋 🐬 🐄 🐏 🐀 🐃 🐅 🐇 🐉 🐐 🐓 🐕 🐖 🐁 🐂 🐲 🐡 🐊 🐪 🐆 🐈 🐩 🐾 💐 🌸 🌷 🍀 🌹 🌻 🌺 🍁 🍃 🍂 🌿 🍄 🌵 🌴 🌲 🌳 🌰 🌱 🌼 🌾 🐚 🌐 🌞 🌝 🌚 🌑 🌒 🌓 🌔 🌕 🌖 🌗 🌘 🌜 🌛 🌔 🌍 🌎 🌏 🌋 🌌 ⛅️

🎍 💝 🎎 🎒 🎓 🎏 🎆 🎇 🎐 🎑 🎃 👻 🎅 🎄 🎁 🔔 🔕 🎋 🎉 🎊 🎈 🔮 💿 📀 💾 📷 📹 🎥 💻 📺 📱 ☎️ ☎️ 📞 📟 📠 💽 📼 🔉 🔈 🔇 📢 📣 ⌛️ ⏳ ⏰ ⌚️ 📻 📡 ➿ 🔍 🔎 🔓 🔒 🔏 🔐 🔑 💡 🔦 🔆 🔅 🔌 🔋 📲 ✉️ 📫 📮 🛀 🛁 🚿 🚽 🔧 🔩 🔨 💺 💰 💴 💵 💷 💶 💳 💸 📧 📥 📤 ✉️ 📨 📯 📪 📬 📭 📦 🚪 🚬 💣 🔫 🔪 💊 💉 📄 📃 📑 📊 📈 📉 📜 📋 📆 📅 📇 📁 📂 ✂️ 📌 📎 ✒️ ✏️ 📏 📐 📕 📗 📘 📙 📓 📔 📒 📚 🔖 📛 🔬 🔭 📰 🏈 🏀 ⚽️ ⚾️ 🎾 🎱 🏉 🎳 ⛳️ 🚵 🚴 🏇 🏂 🏊 🏄 🎿 ♠️ ♥️ ♣️ ♦️ 💎 💍 🏆 🎼 🎹 🎻 👾 🎮 🃏 🎴 🎲 🎯 🀄️ 🎬 📝 📝 📖 🎨 🎤 🎧 🎺 🎷 🎸 👞 👡 👠 💄 👢 👕 👕 👔 👚 👗 🎽 👖 👘 👙 🎀 🎩 👑 👒 👞 🌂 💼 👜 👝 👛 👓 🎣 ☕️ 🍵 🍶 🍼 🍺 🍻 🍸 🍹 🍷 🍴 🍕 🍔 🍟 🍗 🍖 🍝 🍛 🍤 🍱 🍣 🍥 🍙 🍘 🍚 🍜 🍲 🍢 🍡 🥚 🍞 🍩 🍮 🍦 🍨 🍧 🎂 🍰 🍪 🍫 🍬 🍭 🍯 🍎 🍏 🍊 🍋 🍒 🍇 🍉 🍓 🍑 🍈 🍌 🍐 🍍 🍠 🍆 🍅 🌽 

🏠 🏡 🏫 🏢 🏣 🏥 🏦 🏪 🏩 🏨 💒 ⛪️ 🏬 🏤 🌇 🌆 🏯 🏰 ⛺️ 🏭 🗼 🗾 🗻 🌄 🌅 🌠 🗽 🌉 🎠 🌈 🎡 ⛲️ 🎢 🚢 🚤 ⛵️ ⛵️ 🚣 ⚓️ 🚀 ✈️ 🚁 🚂 🚊 🚞 🚲 🚡 🚟 🚠 🚜 🚙 🚘 🚗 🚗 🚕 🚖 🚛 🚌 🚍 🚨 🚓 🚔 🚒 🚑 🚐 🚚 🚋 🚉 🚆 🚅 🚄 🚈 🚝 🚃 🚎 🎫 ⛽️ 🚦 🚥 ⚠️ 🚧 🔰 🏧 🎰 🚏 💈 ♨️ 🏁 🎌 🏮 🗿 🎪 🎭 📍 🚩 🇯🇵 🇰🇷 🇨🇳 🇺🇸 🇫🇷 🇪🇸 🇮🇹 🇷🇺 🇬🇧 🇬🇧 🇩🇪

1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 0️⃣ #️⃣ 🔣 ◀️ ⬇️ ▶️ ⬅️ 🔠 🔡 🔤 ↙️ ↘️ ➡️ ⬆️ ↖️ ↗️ ⏬ ⏫ 🔽 ⤵️ ⤴️ ↩️ ↪️ ↔️ ↕️ 🔼 🔃 🔄 ⏪ ⏩ ℹ️ 🆗 🔀 🔁 🔂 🆕 🔝 🆙 🆒 🆓 🆖 🎦 🈁 📶 🈹 🈴 🈺 🈯️ 🈷️ 🈶 🈵 🈚️ 🈸 🈳 🈲 🈂️ 🚻 🚹 🚺 🚼 🚭 🅿️ ♿️ 🚇 🛄 🉑 🚾 🚰 🚮 ㊙️ ㊗️ Ⓜ️ 🛂 🛅 🛃 🉐 🆑 🆘 🆔 🚫 🔞 📵 🚯 🚱 🚳 🚷 🚸 ⛔️ ✳️ ❇️ ✴️ 💟 🆚 📳 📴 💹 💱 ♈️ ♉️ ♊️ ♋️ ♌️ ♍️ ♎️ ♏️ ♐️ ♑️ ♒️ ♓️ ⛎ 🔯 ❎ 🅰️ 🅱️ 🆎 🅾️ 💠 ♻️ 🔚 🔙 🔛 🔜 🕐 🕜 🕙 🕥 🕚 🕦 🕛 🕧 🕑 🕝 🕒 🕞 🕓 🕟 🕔 🕠 🕕 🕡 🕖 🕢 🕗 🕣 🕘 🕤 💲 ©️ ®️ ™️ ❌ ❗️ ‼️ ⁉️ ⭕️ ✖️ ➕ ➖ ➗ 💮 💯 ✔️ ☑️ 🔘 🔗 ➰ 〰️ 〽️ 🔱 ▪️ ▫️ ◾️ ◽️ ◼️ ◻️ ⬛️ ⬜️ ✅ 🔲 🔳 ⚫️ ⚪️ 🔴 🔵 🔷 🔶 🔹 🔸 🔺 🔻 