[**fimidara**](../../README.md)

***

[fimidara](../../modules.md) / [indexBrowser](../README.md) / ImageResizeParams

# Type Alias: ImageResizeParams

> **ImageResizeParams** = `object`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4262](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4262)

Parameters for resizing images on-the-fly during file retrieval

## Properties

### background?

> `optional` **background**: `string`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4302](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4302)

Hex background color to use when fit is contain

#### Example

```
#FFFFFF
```

***

### fit?

> `optional` **fit**: [`ImageResizeFitEnum`](ImageResizeFitEnum.md)

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4286](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4286)

How the image should be resized to fit provided dimensions

#### Example

```
cover
```

***

### height?

> `optional` **height**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4278](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4278)

Resize to height if file is an image

#### Example

```
400
```

***

### position?

> `optional` **position**: [`ImageResizePositionEnum`](ImageResizePositionEnum.md) \| `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4294](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4294)

Position or gravity to use when fit is cover or contain

#### Example

```
center
```

***

### width?

> `optional` **width**: `number`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4270](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4270)

Resize to width if file is an image

#### Example

```
600
```

***

### withoutEnlargement?

> `optional` **withoutEnlargement**: `boolean`

Defined in: [fimidara-js-sdk/src/endpoints/publicTypes.ts:4310](https://github.com/softkave/fimidara/blob/feac071900ab8644442d355e5cb5db9df2f34600/fimidara-js-sdk/src/endpoints/publicTypes.ts#L4310)

Do not enlarge if the width or height are already less than provided dimensions

#### Example

```
true
```
