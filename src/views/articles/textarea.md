# <i class="icon-input"></i> <br/> Textarea / 文本域

## 基础用法

```HTML
<mdc-textarea placeholder="描述"></mdc-textarea>
```

<mdc-textarea placeholder="描述"></mdc-textarea>

## 更多样式

### cols & rows / 列数 & 行数

设置`cols`与`rows`属性来指定 textarea 的初始宽高。这与原生`textarea`的对应属性作用相同。  
`cols`的默认值为`20`,`rows`的默认值为为`4`。

```HTML
<mdc-textarea :cols="48" :rows="8" placeholder="描述"></mdc-textarea>
```

<mdc-textarea :cols="48" :rows="8" placeholder="描述"></mdc-textarea>

### resize

设置`resize`可以指定 textarea 是否可以通过拖动句柄调整大小。  
这个属性的可选值为`'none' | 'vertical' | 'horizontal' | 'both'`。默认值为`'none'`。

这个属性的取值和作用与 css 中的`resize`属性相同。

```HTML
<mdc-textarea resize="vertical" placeholder="只能纵向拖动"></mdc-textarea>
```

<mdc-textarea resize="vertical" placeholder="只能纵向拖动"></mdc-textarea>

### NoLabel / 无标签

添加`no-label`属性即可将其设置为无标签输入框。  
此时即使设置了 placeholder 属性，也不会显示标签或占位符，例如：

```HTML
<mdc-textarea no-label placeholder="描述"></mdc-textarea>
```

<mdc-textarea no-label placeholder="描述"></mdc-textarea>

## 提示

### 字数统计

添加`counter`属性可以在文本域内右下方展示字数统计。

```HTML
<mdc-textarea :maxlength="140" counter :cols="48" :rows="8" placeholder="描述"></mdc-textarea>
```

<mdc-textarea :maxlength="140" counter :cols="48" :rows="8" placeholder="描述"></mdc-textarea>

注意：`counter`属性需要配合指定了可用数值的`maxlength`属性使用。当`maxlength`未设置或数据不正确时，`counter`属性无效。
