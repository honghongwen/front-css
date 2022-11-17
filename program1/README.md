### 圣杯布局和双飞翼布局的区别

#### 圣杯布局
> 圣杯布局未外三个div，中间div分middle、left、right，同时中间div设置padding-left和padding-right留出两栏空间，
> 中间三子div浮动，middle占满宽度，让left设负100%margin-left，同时配合相对定位-180px固定在左栏
> 右div负-200px的margin-left，同时配合相对定位-200固定在右栏
> 四个要点
> * 中间div padding留出两栏宽度
> * middle占满宽度
> * left margin-left -100% 配合-180px的相对定位
> * right margin-left -200px 配合-200px的相对定位

#### 双飞翼布局
> 双飞翼不同于圣杯，在于五个平铺的div，不过middle会有inside，同时设置inside的margin-left和right，让内容
> 自适应宽度。同时middle、left、right flot-left，设置left和right的margin-left为负值。middle占满100%达到效果

#### 相同点
> 两者都是两边顶宽，中间自适应的三栏布局，中间栏要放在文档流前面以优先渲染
