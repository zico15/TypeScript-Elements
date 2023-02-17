import { Ref, Reference } from "../../factory/Ref";

export default class CSSStyle {

    private _style: CSSStyleDeclaration;

    constructor(style: CSSStyleDeclaration) {
        this._style = style;
    }

    get alignContent(): string {
        return this._style.alignContent;
    }

    set alignContent(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)

            value.on((v) => this._style.alignContent = v)
            this._style.alignContent = value.value;
        }
        else
            this._style.alignContent = value.valueOf();
    }

    get alignItems(): string {
        return this._style.alignItems;
    }

    set alignItems(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.alignItems = v)
            this._style.alignItems = value.value;
        }
        else
            this._style.alignItems = value.valueOf();
    }

    get alignSelf(): string {
        return this._style.alignSelf;
    }

    set alignSelf(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.alignSelf = v)
            this._style.alignSelf = value.value;
        }
        else
            this._style.alignSelf = value.valueOf();
    }

    get alignmentBaseline(): string {
        return this._style.alignmentBaseline;
    }

    set alignmentBaseline(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.alignmentBaseline = v)
            this._style.alignmentBaseline = value.value;
        }
        else
            this._style.alignmentBaseline = value.valueOf();
    }

    get all(): string {
        return this._style.all;
    }

    set all(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.all = v)
            this._style.all = value.value;
        }
        else
            this._style.all = value.valueOf();
    }

    get animation(): string {
        return this._style.animation;
    }

    set animation(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.animation = v)
            this._style.animation = value.value;
        }
        else
            this._style.animation = value.valueOf();
    }

    get animationDelay(): string {
        return this._style.animationDelay;
    }

    set animationDelay(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.animationDelay = v)
            this._style.animationDelay = value.value;
        }
        else
            this._style.animationDelay = value.valueOf();
    }

    get animationDirection(): string {
        return this._style.animationDirection;
    }

    set animationDirection(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.animationDirection = v)
            this._style.animationDirection = value.value;
        }
        else
            this._style.animationDirection = value.valueOf();
    }

    get animationDuration(): string {
        return this._style.animationDuration;
    }

    set animationDuration(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.animationDuration = v)
            this._style.animationDuration = value.value;
        }
        else
            this._style.animationDuration = value.valueOf();
    }

    get animationFillMode(): string {
        return this._style.animationFillMode;
    }

    set animationFillMode(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.animationFillMode = v)
            this._style.animationFillMode = value.value;
        }
        else
            this._style.animationFillMode = value.valueOf();
    }

    get animationIterationCount(): string {
        return this._style.animationIterationCount;
    }

    set animationIterationCount(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.animationIterationCount = v)
            this._style.animationIterationCount = value.value;
        }
        else
            this._style.animationIterationCount = value.valueOf();
    }

    get animationName(): string {
        return this._style.animationName;
    }

    set animationName(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.animationName = v)
            this._style.animationName = value.value;
        }
        else
            this._style.animationName = value.valueOf();
    }

    get animationPlayState(): string {
        return this._style.animationPlayState;
    }

    set animationPlayState(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.animationPlayState = v)
            this._style.animationPlayState = value.value;
        }
        else
            this._style.animationPlayState = value.valueOf();
    }

    get animationTimingFunction(): string {
        return this._style.animationTimingFunction;
    }

    set animationTimingFunction(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.animationTimingFunction = v)
            this._style.animationTimingFunction = value.value;
        }
        else
            this._style.animationTimingFunction = value.valueOf();
    }

    get backfaceVisibility(): string {
        return this._style.backfaceVisibility;
    }

    set backfaceVisibility(value: string | Ref<any>) {

        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.backfaceVisibility = v)
            this._style.backfaceVisibility = value.value;
        }
        else
            this._style.backfaceVisibility = value.valueOf();
    }

    get background(): string {
        return this._style.background;
    }

    set background(value: string | Ref<any>) {

        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.background = v)
            this._style.background = value.value;
        }
        else
            this._style.background = value.valueOf();
    }

    get backgroundAttachment(): string {
        return this._style.backgroundAttachment;
    }

    set backgroundAttachment(value: string | Ref<any>) {

        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.backgroundAttachment = v)
            this._style.backgroundAttachment = value.value;
        }
        else
            this._style.backgroundAttachment = value.valueOf();
    }

    get backgroundBlendMode(): string {
        return this._style.backgroundBlendMode;
    }

    set backgroundBlendMode(value: string | Ref<any>) {

        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.backgroundBlendMode = v)
            this._style.backgroundBlendMode = value.value;
        }
        else
            this._style.backgroundBlendMode = value.valueOf();
    }

    get backgroundClip(): string {
        return this._style.backgroundClip;
    }

    set backgroundClip(value: string | Ref<any>) {

        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.backgroundClip = v)
            this._style.backgroundClip = value.value;
        }
        else
            this._style.backgroundClip = value.valueOf();
    }

    get backgroundColor(): string {
        return this._style.backgroundColor;
    }

    set backgroundColor(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.backgroundColor = v)
            this._style.backgroundColor = value.value;
        }
        else
            this._style.backgroundColor = value.valueOf();
    }

    get backgroundImage(): string {
        return this._style.backgroundImage;
    }

    set backgroundImage(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.backgroundImage = v)
            this._style.backgroundImage = value.value;
        }
        else
            this._style.backgroundImage = value.valueOf();
    }

    get backgroundOrigin(): string {
        return this._style.backgroundOrigin;
    }

    set backgroundOrigin(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.backgroundOrigin = v)
            this._style.backgroundOrigin = value.value;
        }
        else
            this._style.backgroundOrigin = value.valueOf();
    }

    get backgroundPosition(): string {

        return this._style.backgroundPosition;
    }

    set backgroundPosition(value: string | Ref<any>) {

        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.backgroundPosition = v)
            this._style.backgroundPosition = value.value;
        }
        else
            this._style.backgroundPosition = value.valueOf();
    }

    get backgroundPositionX(): string {
        return this._style.backgroundPositionX;
    }

    set backgroundPositionX(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.backgroundPositionX = v)
            this._style.backgroundPositionX = value.value;
        }
        else
            this._style.backgroundPositionX = value.valueOf();
    }

    get backgroundPositionY(): string {
        return this._style.backgroundPositionY;
    }


    set backgroundPositionY(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.backgroundPositionY = v)
            this._style.backgroundPositionY = value.value;
        }
        else
            this._style.backgroundPositionY = value.valueOf();
    }

    get backgroundRepeat(): string {
        return this._style.backgroundRepeat;
    }

    set backgroundRepeat(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.backgroundRepeat = v)
            this._style.backgroundRepeat = value.value;
        }
        else
            this._style.backgroundRepeat = value.valueOf();
    }

    get backgroundSize(): string {
        return this._style.backgroundSize;
    }


    set backgroundSize(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.backgroundSize = v)
            this._style.backgroundSize = value.value;
        }
        else
            this._style.backgroundSize = value.valueOf();
    }

    get border(): string {
        return this._style.border;
    }

    set border(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.border = v)
            this._style.border = value.value;
        }
        else
            this._style.border = value.valueOf();
    }

    get borderBottom(): string {
        return this._style.borderBottom;
    }

    set borderBottom(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderBottom = v)
            this._style.borderBottom = value.value;
        }
        else
            this._style.borderBottom = value.valueOf();
    }


    get borderBottomColor(): string {
        return this._style.borderBottomColor;
    }

    set borderBottomColor(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderBottomColor = v)
            this._style.borderBottomColor = value.value;
        }
        else
            this._style.borderBottomColor = value.valueOf();
    }

    get borderBottomLeftRadius(): string {
        return this._style.borderBottomLeftRadius;
    }

    set borderBottomLeftRadius(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderBottomLeftRadius = v)
            this._style.borderBottomLeftRadius = value.value;
        }
        else
            this._style.borderBottomLeftRadius = value.valueOf();
    }

    get borderBottomRightRadius(): string {
        return this._style.borderBottomRightRadius;
    }

    set borderBottomRightRadius(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderBottomRightRadius = v)
            this._style.borderBottomRightRadius = value.value;
        }
        else
            this._style.borderBottomRightRadius = value.valueOf();
    }

    get borderBottomStyle(): string {
        return this._style.borderBottomStyle;
    }

    set borderBottomStyle(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderBottomStyle = v)
            this._style.borderBottomStyle = value.value;
        }
        else
            this._style.borderBottomStyle = value.valueOf();
    }

    get borderBottomWidth(): string {
        return this._style.borderBottomWidth;
    }

    set borderBottomWidth(value: string | Ref<any>) {

        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderBottomWidth = v)
            this._style.borderBottomWidth = value.value;
        }
        else
            this._style.borderBottomWidth = value.valueOf();
    }

    get borderCollapse(): string {
        return this._style.borderCollapse;
    }

    set borderCollapse(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderCollapse = v)
            this._style.borderCollapse = value.value;
        }
        else
            this._style.borderCollapse = value.valueOf();
    }

    get borderColor(): string {
        return this._style.borderColor;
    }

    set borderColor(value: string | Ref<any>) {

        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderColor = v)
            this._style.borderColor = value.value;
        }
        else
            this._style.borderColor = value.valueOf();
    }

    get borderImage(): string {

        return this._style.borderImage;
    }

    set borderImage(value: string | Ref<any>) {

        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderImage = v)
            this._style.borderImage = value.value;
        }
        else
            this._style.borderImage = value.valueOf();
    }

    get borderImageOutset(): string {
        return this._style.borderImageOutset;
    }

    set borderImageOutset(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderImageOutset = v)
            this._style.borderImageOutset = value.value;
        }
        else
            this._style.borderImageOutset = value.valueOf();
    }

    get borderImageRepeat(): string {
        return this._style.borderImageRepeat;
    }

    set borderImageRepeat(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderImageRepeat = v)
            this._style.borderImageRepeat = value.value;
        }
        else
            this._style.borderImageRepeat = value.valueOf();
    }

    get borderImageSlice(): string {
        return this._style.borderImageSlice;
    }

    set borderImageSlice(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderImageSlice = v)
            this._style.borderImageSlice = value.value;
        }
        else
            this._style.borderImageSlice = value.valueOf();
    }

    get borderImageSource(): string {
        return this._style.borderImageSource;
    }

    set borderImageSource(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderImageSource = v)
            this._style.borderImageSource = value.value;
        }
        else
            this._style.borderImageSource = value.valueOf();
    }

    get borderImageWidth(): string {
        return this._style.borderImageWidth;
    }

    set borderImageWidth(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderImageWidth = v)
            this._style.borderImageWidth = value.value;
        }
        else
            this._style.borderImageWidth = value.valueOf();
    }
    
    get borderLeft(): string {
        return this._style.borderLeft;
    }

    set borderLeft(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderLeft = v)
            this._style.borderLeft = value.value;
        }
        else
            this._style.borderLeft = value.valueOf();
    }

    get borderLeftColor(): string {
        return this._style.borderLeftColor;
    }

    set borderLeftColor(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderLeftColor = v)
            this._style.borderLeftColor = value.value;
        }
        else
            this._style.borderLeftColor = value.valueOf();
    }

    get borderLeftStyle(): string {
        return this._style.borderLeftStyle;
    }

    set borderLeftStyle(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderLeftStyle = v)
            this._style.borderLeftStyle = value.value;
        }
        else
            this._style.borderLeftStyle = value.valueOf();
    }

    get borderLeftWidth(): string {
        return this._style.borderLeftWidth;
    }

    set borderLeftWidth(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderLeftWidth = v)
            this._style.borderLeftWidth = value.value;
        }
        else
            this._style.borderLeftWidth = value.valueOf();
    }

    get borderRadius(): string {
        return this._style.borderRadius;
    }

    set borderRadius(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderRadius = v)
            this._style.borderRadius = value.value;
        }
        else
            this._style.borderRadius = value.valueOf();
    }

    get borderRight(): string {
        return this._style.borderRight;
    }

    set borderRight(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderRight = v)
            this._style.borderRight = value.value;
        }
        else
            this._style.borderRight = value.valueOf();
    }

    get borderRightColor(): string {
        return this._style.borderRightColor;
    }

    set borderRightColor(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderRightColor = v)
            this._style.borderRightColor = value.value;
        }
        else
            this._style.borderRightColor = value.valueOf();
    }

    get borderRightStyle(): string {
        return this._style.borderRightStyle;
    }

    set borderRightStyle(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderRightStyle = v)
            this._style.borderRightStyle = value.value;
        }
        else
            this._style.borderRightStyle = value.valueOf();
    }

    get borderRightWidth(): string {
        return this._style.borderRightWidth;
    }
    
    set borderRightWidth(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderRightWidth = v)
            this._style.borderRightWidth = value.value;
        }
        else
            this._style.borderRightWidth = value.valueOf();
    }

    get borderSpacing(): string {
        return this._style.borderSpacing;
    }

    set borderSpacing(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderSpacing = v)
            this._style.borderSpacing = value.value;
        }
        else
            this._style.borderSpacing = value.valueOf();
    }
    
    get borderStyle(): string {
        return this._style.borderStyle;
    }

    set borderStyle(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderStyle = v)
            this._style.borderStyle = value.value;
        }
        else
            this._style.borderStyle = value.valueOf();
    }

    get borderTop(): string {
        return this._style.borderTop;
    }

    set borderTop(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderTop = v)
            this._style.borderTop = value.value;
        }
        else
            this._style.borderTop = value.valueOf();
    }

    get borderTopColor(): string {
        return this._style.borderTopColor;
    }

    set borderTopColor(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderTopColor = v)
            this._style.borderTopColor = value.value;
        }
        else
            this._style.borderTopColor = value.valueOf();
    }

    get borderTopLeftRadius(): string {
        return this._style.borderTopLeftRadius;
    }

    set borderTopLeftRadius(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderTopLeftRadius = v)
            this._style.borderTopLeftRadius = value.value;
        }
        else
            this._style.borderTopLeftRadius = value.valueOf();
    }

    get borderTopRightRadius(): string {
        return this._style.borderTopRightRadius;
    }

    set borderTopRightRadius(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderTopRightRadius = v)
            this._style.borderTopRightRadius = value.value;
        }
        else
            this._style.borderTopRightRadius = value.valueOf();
    }

    get borderTopStyle(): string {
        return this._style.borderTopStyle;
    }
    
    set borderTopStyle(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderTopStyle = v)
            this._style.borderTopStyle = value.value;
        }
        else
            this._style.borderTopStyle = value.valueOf();
    }
    
    get borderTopWidth(): string {
        return this._style.borderTopWidth;
    }

    set borderTopWidth(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderTopWidth = v)
            this._style.borderTopWidth = value.value;
        }
        else
            this._style.borderTopWidth = value.valueOf();
    }

    get borderWidth(): string {
        return this._style.borderWidth;
    }

    set borderWidth(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.borderWidth = v)
            this._style.borderWidth = value.value;
        }
        else
            this._style.borderWidth = value.valueOf();
    }
    
    get boxShadow(): string {
        return this._style.boxShadow;
    }

    set boxShadow(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.boxShadow = v)
            this._style.boxShadow = value.value;
        }
        else
            this._style.boxShadow = value.valueOf();
    }

    get boxSizing(): string {
        return this._style.boxSizing;
    }

    set boxSizing(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.boxSizing = v)
            this._style.boxSizing = value.value;
        }
        else
            this._style.boxSizing = value.valueOf();
    }

    get breakAfter(): string {
        return this._style.breakAfter;
    }

    set breakAfter(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.breakAfter = v)
            this._style.breakAfter = value.value;
        }
        else
            this._style.breakAfter = value.valueOf();
    }

    get breakBefore(): string {
        return this._style.breakBefore;
    }

    set breakBefore(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.breakBefore = v)
            this._style.breakBefore = value.value;
        }
        else
            this._style.breakBefore = value.valueOf();
    }

    get breakInside(): string {
        return this._style.breakInside;
    }

    set breakInside(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.breakInside = v)
            this._style.breakInside = value.value;
        }
        else
            this._style.breakInside = value.valueOf();
    }

    get captionSide(): string {
        return this._style.captionSide;
    }
    
    set captionSide(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.captionSide = v)
            this._style.captionSide = value.value;
        }
        else
            this._style.captionSide = value.valueOf();
    }

    get clear(): string {
        return this._style.clear;
    }

    set clear(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.clear = v)
            this._style.clear = value.value;
        }
        else
            this._style.clear = value.valueOf();
    }

    get clip(): string {
        return this._style.clip;
    }

    set clip(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.clip = v)
            this._style.clip = value.value;
        }
        else
            this._style.clip = value.valueOf();
    }

    get color(): string {
        return this._style.color;
    }

    set color(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.color = v)
            this._style.color = value.value;
        }
        else
            this._style.color = value.valueOf();
    }

    get columnCount(): string {
        return this._style.columnCount;
    }

    set columnCount(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.columnCount = v)
            this._style.columnCount = value.value;
        }
        else
            this._style.columnCount = value.valueOf();
    }

    get columnFill(): string {
        return this._style.columnFill;
    }

    set columnFill(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.columnFill = v)
            this._style.columnFill = value.value;
        }
        else
            this._style.columnFill = value.valueOf();
    }

    get columnGap(): string {
        return this._style.columnGap;
    }

    set columnGap(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.columnGap = v)
            this._style.columnGap = value.value;
        }
        else
            this._style.columnGap = value.valueOf();
    }

    get columnRule(): string {
        return this._style.columnRule;
    }

    set columnRule(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.columnRule = v)
            this._style.columnRule = value.value;
        }
        else
            this._style.columnRule = value.valueOf();
    }

    get columnRuleColor(): string {
        return this._style.columnRuleColor;
    }

    set columnRuleColor(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.columnRuleColor = v)
            this._style.columnRuleColor = value.value;
        }
        else
            this._style.columnRuleColor = value.valueOf();
    }

    get columnRuleStyle(): string {
        return this._style.columnRuleStyle;
    }
    
    set columnRuleStyle(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.columnRuleStyle = v)
            this._style.columnRuleStyle = value.value;
        }
        else
            this._style.columnRuleStyle = value.valueOf();
    }
    
    get columnRuleWidth(): string {
        return this._style.columnRuleWidth;
    }

    set columnRuleWidth(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.columnRuleWidth = v)
            this._style.columnRuleWidth = value.value;
        }
        else
            this._style.columnRuleWidth = value.valueOf();
    }

    get columnSpan(): string {
        return this._style.columnSpan;
    }

    set columnSpan(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.columnSpan = v)
            this._style.columnSpan = value.value;
        }
        else
            this._style.columnSpan = value.valueOf();
    }

    get columnWidth(): string {
        return this._style.columnWidth;
    }

    set columnWidth(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.columnWidth = v)
            this._style.columnWidth = value.value;
        }
        else
            this._style.columnWidth = value.valueOf();
    }

    get columns(): string {
        return this._style.columns;
    }

    set columns(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.columns = v)
            this._style.columns = value.value;
        }
        else
            this._style.columns = value.valueOf();
    }
    
    get content(): string {
        return this._style.content;
    }

    set content(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.content = v)
            this._style.content = value.value;
        }
        else
            this._style.content = value.valueOf();
    }

    get counterIncrement(): string {
        return this._style.counterIncrement;
    }

    set counterIncrement(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.counterIncrement = v)
            this._style.counterIncrement = value.value;
        }
        else
            this._style.counterIncrement = value.valueOf();
    }

    get counterReset(): string {
        return this._style.counterReset;
    }

    set counterReset(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.counterReset = v)
            this._style.counterReset = value.value;
        }
        else
            this._style.counterReset = value.valueOf();
    }

    get cursor(): string {
        return this._style.cursor;
    }

    set cursor(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.cursor = v)
            this._style.cursor = value.value;
        }
        else
            this._style.cursor = value.valueOf();
    }

    get direction(): string {
        return this._style.direction;
    }

    set direction(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.direction = v)
            this._style.direction = value.value;
        }
        else
            this._style.direction = value.valueOf();
    }

    get display(): string {
        return this._style.display;
    }

    set display(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.display = v)
            this._style.display = value.value;
        }
        else
            this._style.display = value.valueOf();
    }

    get emptyCells(): string {
        return this._style.emptyCells;
    }

    set emptyCells(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.emptyCells = v)
            this._style.emptyCells = value.value;
        }
        else
            this._style.emptyCells = value.valueOf();
    }

    get filter(): string {
        return this._style.filter;
    }

    set filter(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.filter = v)
            this._style.filter = value.value;
        }
        else
            this._style.filter = value.valueOf();
    }
    
    get flex(): string {
        return this._style.flex;
    }

    set flex(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.flex = v)
            this._style.flex = value.value;
        }
        else
            this._style.flex = value.valueOf();
    }

    get flexBasis(): string {
        return this._style.flexBasis;
    }

    set flexBasis(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.flexBasis = v)
            this._style.flexBasis = value.value;
        }
        else
            this._style.flexBasis = value.valueOf();
    }

    get flexDirection(): string {
        return this._style.flexDirection;
    }

    set flexDirection(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.flexDirection = v)
            this._style.flexDirection = value.value;
        }
        else
            this._style.flexDirection = value.valueOf();
    }

    get flexFlow(): string {
        return this._style.flexFlow;
    }

    set flexFlow(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.flexFlow = v)
            this._style.flexFlow = value.value;
        }
        else
            this._style.flexFlow = value.valueOf();
    }

    get flexGrow(): string {
        return this._style.flexGrow;
    }

    set flexGrow(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.flexGrow = v)
            this._style.flexGrow = value.value;
        }
        else
            this._style.flexGrow = value.valueOf();
    }

    get flexShrink(): string {
        return this._style.flexShrink;
    }

    set flexShrink(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.flexShrink = v)
            this._style.flexShrink = value.value;
        }
        else
            this._style.flexShrink = value.valueOf();
    }

    get flexWrap(): string {
        return this._style.flexWrap;
    }

    set flexWrap(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.flexWrap = v)
            this._style.flexWrap = value.value;
        }
        else
            this._style.flexWrap = value.valueOf();
    }

    get float(): string {
        return this._style.float;
    }

    set float(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.float = v)
            this._style.float = value.value;
        }
        else
            this._style.float = value.valueOf();
    }

    get font(): string {
        return this._style.font;
    }

    set font(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.font = v)
            this._style.font = value.value;
        }
        else
            this._style.font = value.valueOf();
    }

    get fontFamily(): string {
        return this._style.fontFamily;
    }

    set fontFamily(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.fontFamily = v)
            this._style.fontFamily = value.value;
        }
        else
            this._style.fontFamily = value.valueOf();
    }

    get fontFeatureSettings(): string {
        return this._style.fontFeatureSettings;
    }

    set fontFeatureSettings(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.fontFeatureSettings = v)
            this._style.fontFeatureSettings = value.value;
        }
        else
            this._style.fontFeatureSettings = value.valueOf();
    }

    get fontKerning(): string {
        return this._style.fontKerning;
    }

    set fontKerning(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.fontKerning = v)
            this._style.fontKerning = value.value;
        }
        else
            this._style.fontKerning = value.valueOf();
    }

  
    get fontStretch(): string {
        return this._style.fontStretch;
    }

    set fontStretch(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.fontStretch = v)
            this._style.fontStretch = value.value;
        }
        else
            this._style.fontStretch = value.valueOf();
    }

    get fontStyle(): string {
        return this._style.fontStyle;
    }

    set fontStyle(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.fontStyle = v)
            this._style.fontStyle = value.value;
        }
        else
            this._style.fontStyle = value.valueOf();
    }

    get fontVariant(): string {
        return this._style.fontVariant;
    }

    set fontVariant(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.fontVariant = v)
            this._style.fontVariant = value.value;
        }
        else
            this._style.fontVariant = value.valueOf();
    }

    get fontVariantCaps(): string {
        return this._style.fontVariantCaps;
    }

    set fontVariantCaps(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.fontVariantCaps = v)
            this._style.fontVariantCaps = value.value;
        }
        else
            this._style.fontVariantCaps = value.valueOf();
    }

    get fontVariantEastAsian(): string {
        return this._style.fontVariantEastAsian;
    }

    set fontVariantEastAsian(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.fontVariantEastAsian = v)
            this._style.fontVariantEastAsian = value.value;
        }
        else
            this._style.fontVariantEastAsian = value.valueOf();
    }

    get fontVariantLigatures(): string {
        return this._style.fontVariantLigatures;
    }

    set fontVariantLigatures(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.fontVariantLigatures = v)
            this._style.fontVariantLigatures = value.value;
        }
        else
            this._style.fontVariantLigatures = value.valueOf();
    }

    get fontVariantNumeric(): string {
        return this._style.fontVariantNumeric;
    }

    set fontVariantNumeric(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.fontVariantNumeric = v)
            this._style.fontVariantNumeric = value.value;
        }
        else
            this._style.fontVariantNumeric = value.valueOf();
    }

    get fontVariantPosition(): string {
        return this._style.fontVariantPosition;
    }

    set fontVariantPosition(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.fontVariantPosition = v)
            this._style.fontVariantPosition = value.value;
        }
        else
            this._style.fontVariantPosition = value.valueOf();
    }

    get fontWeight(): string {
        return this._style.fontWeight;
    }

    set fontWeight(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.fontWeight = v)
            this._style.fontWeight = value.value;
        }
        else
            this._style.fontWeight = value.valueOf();
    }

    get gap(): string {
        return this._style.gap;
    }

    set gap(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.gap = v)
            this._style.gap = value.value;
        }
        else
            this._style.gap = value.valueOf();
    }

    get grid(): string {
        return this._style.grid;
    }

    set grid(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.grid = v)
            this._style.grid = value.value;
        }
        else
            this._style.grid = value.valueOf();
    }

    get gridArea(): string {
        return this._style.gridArea;
    }

    set gridArea(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.gridArea = v)
            this._style.gridArea = value.value;
        }
        else
            this._style.gridArea = value.valueOf();
    }

    get gridAutoColumns(): string {
        return this._style.gridAutoColumns;
    }

    set gridAutoColumns(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.gridAutoColumns = v)
            this._style.gridAutoColumns = value.value;
        }
        else
            this._style.gridAutoColumns = value.valueOf();
    }

    get gridAutoFlow(): string {
        return this._style.gridAutoFlow;
    }

    set gridAutoFlow(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.gridAutoFlow = v)
            this._style.gridAutoFlow = value.value;
        }
        else
            this._style.gridAutoFlow = value.valueOf();
    }

    get gridAutoRows(): string {
        return this._style.gridAutoRows;
    }

    set gridAutoRows(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.gridAutoRows = v)
            this._style.gridAutoRows = value.value;
        }
        else
            this._style.gridAutoRows = value.valueOf();
    }

    get gridColumn(): string {
        return this._style.gridColumn;
    }

    set gridColumn(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.gridColumn = v)
            this._style.gridColumn = value.value;
        }
        else
            this._style.gridColumn = value.valueOf();
    }

    get gridColumnEnd(): string {
        return this._style.gridColumnEnd;
    }

    set gridColumnEnd(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.gridColumnEnd = v)
            this._style.gridColumnEnd = value.value;
        }
        else
            this._style.gridColumnEnd = value.valueOf();
    }

    get gridColumnGap(): string {
        return this._style.gridColumnGap;
    }

    set gridColumnGap(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.gridColumnGap = v)
            this._style.gridColumnGap = value.value;
        }
        else
            this._style.gridColumnGap = value.valueOf();
    }

    get gridColumnStart(): string {
        return this._style.gridColumnStart;
    }

    set gridColumnStart(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.gridColumnStart = v)
            this._style.gridColumnStart = value.value;
        }
        else
            this._style.gridColumnStart = value.valueOf();
    }

    get gridGap(): string {
        return this._style.gridGap;
    }

    get top(): string {
        return this._style.top;
    }

    set top(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.top = typeof v === 'number' ? v + 'px' : v.toString())
            value.emit();
        }
        else
            this._style.top = value.valueOf();
    }

    get right(): string {
        return this._style.right;
    }

    set right(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.right = typeof v === 'number' ? v + 'px' : v.toString())
            value.emit();
        }
        else
            this._style.right = value.valueOf();
    }

    get bottom(): string {
        return this._style.bottom;
    }

    set bottom(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.bottom = typeof v === 'number' ? v + 'px' : v.toString())
            value.emit();
        }
        else
            this._style.bottom = value.valueOf();
    }

    get left(): string {
        return this._style.left;
    }

    set left(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.left = typeof v === 'number' ? v + 'px' : v.toString())
            value.emit();
        }
        else
            this._style.left = value.valueOf();
    }

    get gridRow(): string {
        return this._style.gridRow;
    }

    set gridRow(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.gridRow = v)
            this._style.gridRow = value.value;
        }
        else
            this._style.gridRow = value.valueOf();
    }

    get gridRowEnd(): string {
        return this._style.gridRowEnd;
    }

    set gridRowEnd(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.gridRowEnd = v)
            this._style.gridRowEnd = value.value;
        }
        else
            this._style.gridRowEnd = value.valueOf();
    }

    get gridRowGap(): string {
        return this._style.gridRowGap;
    }

    set gridRowGap(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.gridRowGap = v)
            this._style.gridRowGap = value.value;
        }
        else
            this._style.gridRowGap = value.valueOf();
    }

    get gridRowStart(): string {
        return this._style.gridRowStart;
    }

    set gridRowStart(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.gridRowStart = v)
            this._style.gridRowStart = value.value;
        }
        else
            this._style.gridRowStart = value.valueOf();
    }

    get gridTemplate(): string {
        return this._style.gridTemplate;
    }

    set gridTemplate(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.gridTemplate = v)
            this._style.gridTemplate = value.value;
        }
        else
            this._style.gridTemplate = value.valueOf();
    }

    get gridTemplateAreas(): string {
        return this._style.gridTemplateAreas;
    }

    get width(): string {
        return this._style.width;
    }

    set width(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.width = typeof v === 'number' ? v + 'px' : v.toString())
            value.emit();
        }
        else
            this._style.width = value.valueOf();
    }

    get height(): string {
        return this._style.height;
    }

    set height(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.height = typeof v === 'number' ? v + 'px' : v.toString())
            value.emit();
        }
        else
            this._style.height = value.valueOf();
    }

    get minWidth(): string {
        return this._style.minWidth;
    }

    set minWidth(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.minWidth = typeof v === 'number' ? v + 'px' : v.toString())
            value.emit();
        }
        else
            this._style.minWidth = value.valueOf();
    }

    get minHeight(): string {
        return this._style.minHeight;
    }

    set minHeight(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.minHeight = typeof v === 'number' ? v + 'px' : v.toString())
            value.emit();
        }
        else
            this._style.minHeight = value.valueOf();
    }

    get maxWidth(): string {
        return this._style.maxWidth;
    }

    set maxWidth(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.maxWidth = typeof v === 'number' ? v + 'px' : v.toString())
            value.emit();
        }
        else
            this._style.maxWidth = value.valueOf();
    }

    get maxHeight(): string {
        return this._style.maxHeight;
    }

    set maxHeight(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.maxHeight = typeof v === 'number' ? v + 'px' : v.toString())
            value.emit();
        }
        else
            this._style.maxHeight = value.valueOf();
    }

    get margin(): string {
        return this._style.margin;
    }

    set margin(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.margin = typeof v === 'number' ? v + 'px' : v.toString())
            value.emit();
        }
        else
            this._style.margin = value.valueOf();
    }

    get marginTop(): string {
        return this._style.marginTop;
    }

    set marginTop(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.marginTop = typeof v === 'number' ? v + 'px' : v.toString())
            value.emit();
        }
        else
            this._style.marginTop = value.valueOf();
    }

    get marginRight(): string {
        return this._style.marginRight;
    }

    set marginRight(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.marginRight = typeof v === 'number' ? v + 'px' : v.toString())
            value.emit();
        }
        else
            this._style.marginRight = value.valueOf();
    }

    get marginBottom(): string {
        return this._style.marginBottom;
    }

    set marginBottom(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.marginBottom = typeof v === 'number' ? v + 'px' : v.toString())
            value.emit();
        }
        else
            this._style.marginBottom = value.valueOf();
    }

    get marginLeft(): string {
        return this._style.marginLeft;
    }

    set marginLeft(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.marginLeft = typeof v === 'number' ? v + 'px' : v.toString())
            value.emit();
        }
        else
            this._style.marginLeft = value.valueOf();
    }

    get padding(): string {
        return this._style.padding;
    }

    set padding(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.padding = typeof v === 'number' ? v + 'px' : v.toString())
            value.emit();
        }
        else
            this._style.padding = value.valueOf();
    }

    get paddingTop(): string {
        return this._style.paddingTop;
    }

    set paddingTop(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.paddingTop = typeof v === 'number' ? v + 'px' : v.toString())
            value.emit();
        }
        else
            this._style.paddingTop = value.valueOf();
    }

    get paddingRight(): string {
        return this._style.paddingRight;
    }

    set paddingRight(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.paddingRight = typeof v === 'number' ? v + 'px' : v.toString())
            value.emit();
        }
        else
            this._style.paddingRight = value.valueOf();
    }

    get paddingBottom(): string {
        return this._style.paddingBottom;
    }

    set paddingBottom(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.paddingBottom = typeof v === 'number' ? v + 'px' : v.toString())
            value.emit();
        }
        else
            this._style.paddingBottom = value.valueOf();
    }

    get paddingLeft(): string {
        return this._style.paddingLeft;
    }

    set paddingLeft(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.paddingLeft = typeof v === 'number' ? v + 'px' : v.toString())
            value.emit();
        }
        else
            this._style.paddingLeft = value.valueOf();
    }

    get position(): string {
        return this._style.position;
    }

    set position(value: string | Ref<any>) {
        if (value instanceof Reference) {
            value = (value as Ref<any>)
            value.on((v) => this._style.position = v.toString())
            value.emit();
        }
        else
            this._style.position = value.valueOf();
    }

}