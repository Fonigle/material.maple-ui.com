# <i class="icon-button"></i> <br/> Button / 按钮

## 基础用法

### 文字按钮

```HTML
<mdc-button>slot</mdc-button>
<mdc-button label="prop"></mdc-button>
```

上述两种用法均可控制在 button 中展示文字。效果如下：

<mdc-button>slot</mdc-button> <mdc-button label="prop"></mdc-button>

### 其他样式

```HTML
<mdc-button type="raised">raised</mdc-button>
<mdc-button type="unelevated">unelevated</mdc-button>
<mdc-button type="outlined">outlined</mdc-button>
```

<mdc-button type="raised">raised</mdc-button>
<mdc-button type="unelevated">unelevated</mdc-button>
<mdc-button type="outlined">outlined</mdc-button>

## 尺寸

可以通过开启`dense`属性，来创建一个较小的按钮。

```HTML
<mdc-button type="outlined">Normal</mdc-button>
<mdc-button type="outlined" dense>Dense</mdc-button>
```

<mdc-button type="outlined">Normal</mdc-button>
<mdc-button type="outlined" dense>Dense</mdc-button>

`dense`属性对任何类型的按钮均可生效。

## 禁用

```HTML
<mdc-button disabled>disabled</mdc-button>
<mdc-button type="raised" disabled>disabled</mdc-button>
<mdc-button type="outlined" disabled>disabled</mdc-button>
```

<mdc-button disabled>disabled</mdc-button>
<mdc-button type="raised" disabled>disabled</mdc-button>
<mdc-button type="outlined" disabled>disabled</mdc-button>
