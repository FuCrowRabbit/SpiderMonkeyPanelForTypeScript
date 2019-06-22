// Project: https://github.com/TheQwertiest/foo_spider_monkey_panel
// Definitions by: FuCrowRabbit <https://github.com/FuCrowRabbit>
// TypeScript Version: 3.5.2
declare enum FrameStyle {
    Default = 0,
    SmallCaption = 1,
    NoCaption = 2,
    NoBorder = 3,
}

declare enum MainMenuState {
    Show = 0,
    Hide = 1,
    Auto = 2,
}

declare enum MainWindowState {
    Normal = 0,
    Minimized = 1,
    Maximized = 2,
}

declare enum MoveStyle {
    Default = 0,
    MiddleMouseButtonOnly = 1,
    LeftMouseButtonOnly = 2,
    LeftOrMiddleMouseButton = 3,
}

declare enum Effect {
    Default = 0,
    Disabled = 1,
    GlassFrame = 2,
    SheetOfGlass = 3, // aero effect applied on whole window
}

declare class IUIHacks {

    /** @type{IAero} */
    Aero: IAero;

    /** @type{boolean} */
    BlockMaximize: boolean;

    /** @type{boolean} */
    DisableSizing: boolean;

    /** @type{boolean} */
    EnableSizing: boolean;

    /** @type{float} */
    FoobarCPUUsage: number;

    /**
     * @description
     * 0 - Default;<br>
     * 1 - SmallCaption;<br>
     * 2 - NoCaption;<br>
     * 3 - NoBorder
     *
     * @type{FrameStyle}
     */
    FrameStyle: FrameStyle;

    /** @type{boolean} */
    FullScreen: boolean;

    /**
     * @description
     * 0 - Show;<br>
     * 1 - Hide;<br>
     * 2 - Auto
     *
     * @type{MainMenuState}
     */
    MainMenuState: MainMenuState;

    /** @type{number} */
    MainWindowID: number;

    /**
     * @description
     * 0 - Normal;<br>
     * 1 - Minimized;<br>
     * 2 - Maximized
     *
     * @type{MainWindowState}
     */
    MainWindowState: MainWindowState;

    /** @type{IMasterVolume} */
    MasterVolume: IMasterVolume;

    /** @type{IConstraints} */
    MaxSize: IConstraints;

    /** @type{IConstraints} */
    MinSize: IConstraints;

    /**
     * 0 - Default;
     * 1 - Middle mouse button only;
     * 2 - Left mouse button only;
     * 3 - Left or middle mouse button;
     *
     * @type{MoveStyle}
     */
    MoveStyle: MoveStyle;

    /** @type{boolean} */
    StatusBarState: boolean;

    /** @type{float} */
    SystemCPUUsage: number;

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     */
    SetPseudoCaption: (x: number, y: number, w: number, h: number) => void;
}

declare class IAero {
    /** @type{boolean} */
    Active: boolean;

    /**
     * @description
     *  0 - Default;<br>
     *  1 - Disabled;<br>
     *  2 - GlassFrame;<br>
     *  3 - SheetOfGlass: aero effect applied on whole window
     *
     *  @type{Effect}
     */
    Effect: Effect;

    /** @type{number} */
    Top: number;

    /** @type{number} */
    Right: number;

    /** @type{number} */
    Left: number;

    /** @type{number} */
    Bottom: number;

    /** @type{boolean} */
    Transparency: boolean;
}

declare class IConstraints {
    /** @type{boolean} */
    Enabled: boolean;

    /** @type{number} */
    Width: number;

    /** @type{number} */
    Height: number;
}

declare class IMasterVolume {
    /**
     * @type{number}
     * @readonly
     */
    readonly ChannelCount: number; // read-only

    /** @type{boolean} */
    Mute: boolean;

    /** @type{float} */
    Volume: number;

    /**
     * @param {number} channelIdx
     * @return {float}
     */
    GetChannelVolume: (channelIdx: number) => number;

    /**
     * @param {number} channelIdx
     * @param {float} volume
     */
    SetChannelVolume: (channelIdx: number, volume: number) => void;

    /** @method */
    VolumeStepDown: () => void;

    /** @method */
    VolumeStepUp: () => void;
}

//# sourceMappingURL=foo_ui_hacks.d.ts.map