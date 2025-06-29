[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / ImageResizeParams

# Type Alias: ImageResizeParams

> **ImageResizeParams** = `object`

Parameters for resizing images on-the-fly during file retrieval

## Properties

### background?

> `optional` **background**: `string`

Hex background color to use when fit is contain

#### Example

```
#FFFFFF
```

***

### fit?

> `optional` **fit**: [`ImageResizeFitEnum`](ImageResizeFitEnum.md)

How the image should be resized to fit provided dimensions

#### Example

```
cover
```

***

### height?

> `optional` **height**: `number`

Resize to height if file is an image

#### Example

```
400
```

***

### position?

> `optional` **position**: [`ImageResizePositionEnum`](ImageResizePositionEnum.md) \| `number`

Position or gravity to use when fit is cover or contain

#### Example

```
center
```

***

### width?

> `optional` **width**: `number`

Resize to width if file is an image

#### Example

```
600
```

***

### withoutEnlargement?

> `optional` **withoutEnlargement**: `boolean`

Do not enlarge if the width or height are already less than provided dimensions

#### Example

```
true
```
