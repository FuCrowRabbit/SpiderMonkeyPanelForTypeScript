// Project: https://github.com/TheQwertiest/foo_spider_monkey_panel
// Definitions by: FuCrowRabbit <https://github.com/FuCrowRabbit>
// TypeScript Version: 3.5.2

/// <reference path="./js/foo_spider_monkey_panel.d.ts" />

/** @module callbacks **/
/**
 * @description Called when "Always On Top" state changes: from using the menu, Alt + A, {@link fb.AlwaysOnTop} and etc.
 *
 * @param {boolean} state
 */
declare function on_always_on_top_changed(state: boolean): void;

/**
 * @description
 * Note: in order to use this callback, use {@link window.DlgCode}(DLGC_WANTCHARS).<br>
 * @see Flags.js > DLGC_WANTCHARS.
 *
 * @param {number} code UTF16 encoded char
 */
declare function on_char(code: number): void;

/**
 * @description
 * Called when colours are changed via default UI/columns UI preferences.<br>
 * Note: use {@link window.GetColourCUI}/{@link window.GetColourDUI} to get new colours.
 *
 */
declare function on_colours_changed(): void;

/**
 * @description Called when "cursor follow playback" state is changed.
 *
 * @param {boolean} state current "cursor follow playback" value
 */
declare function on_cursor_follow_playback_changed(state: boolean): void;

/**
 * @see {@link fb.DoDragDrop} documentation and samples/basic/DragnDrop.txt
 *
 * @param {DropTargetAction} action
 * @param {number} x
 * @param {number} y
 * @param {number} mask see Flags.js > Mask
 */
declare function on_drag_drop(action: DropTargetAction, x: number, y: number, mask: number): void;

/**
 * @see {@link fb.DoDragDrop} documentation and samples/basic/DragnDrop.txt
 *
 * @param {DropTargetAction} action
 * @param {number} x
 * @param {number} y
 * @param {number} mask see Flags.js > Mask
 */
declare function on_drag_enter(action: DropTargetAction, x: number, y: number, mask: number): void;

/**
 * @see {@link fb.DoDragDrop} documentation and samples/basic/DragnDrop.txt
 *
 * @function
 */
declare function on_drag_leave(): void;

/**
 * @see {@link fb.DoDragDrop} documentation and samples/basic/DragnDrop.txt
 *
 * @param {DropTargetAction} action
 * @param {number} x
 * @param {number} y
 * @param {number} mask see Flags.js > Mask
 */
declare function on_drag_over(action: DropTargetAction, x: number, y: number, mask: number): void;

/**
 * @description
 * Called when DSP preset changes.<br>
 * Note: this callback is only available in foobar2000 v1.4 and later.<br>
 * Note2: does not get called when presets are added or removed.
 *
 */
declare function on_dsp_preset_changed(): void;

/**
 * @description Called when the panel gets or loses focus.
 *
 * @param {boolean} is_focused New focus state
 */
declare function on_focus(is_focused: boolean): void;

/**
 * @description
 * Called when fonts are changed via DUI or CUI preferences.
 * Note: you can retrieve fonts using {@link window.GetFontDUI}/{@link window.GetFontCUI}.
 *
 */
declare function on_font_changed(): void;

/**
 * @description Called when thread created by {@link utils.GetAlbumArtAsync} is done.
 *
 * @param {FbMetadbHandle} handle
 * @param {number} art_id @see Flags.js > AlbumArtId
 * @param {?GdiBitmap} image null on failure
 * @param {string} image_path path to image file (or music file if image is embedded)
 */
declare function on_get_album_art_done(handle: FbMetadbHandle, art_id: any, image: any, image_path: any): void;

/**
 * @description Called when focused item in playlist has been changed.
 *
 * @param {number} playlistIndex
 * @param {number} from index of the previous focused item or -1 if there was no focused item.
 * @param {number} to index of the new focued item
 */
declare function on_item_focus_change(playlistIndex: number, from: number, to: number): void;

/**
 * @description
 * Called when at least one minute of the track has been played or the track has reached
 * its end after at least 1/3 of it has been played through.
 *
 * @param {FbMetadbHandle} handle
 */
declare function on_item_played(handle: FbMetadbHandle): void;

/**
 * @description
 * Requires "Grab focus" enabled in the Configuration window.<br>
 * In order to use arrow keys, use {@link window.DlgCode}(DLGC_WANTARROWS) (see Flags.js > DLGC_WANTARROWS).<br>
 * <br>
 * Note: keyboard shortcuts defined in the main preferences are always executed first
 * and are not passed to the callback.
 *
 * @param {number} vkey Virtual Key Code, refer to {@link http://msdn.microsoft.com/en-us/library/ms927178.aspx}
 */
declare function on_key_down(vkey: number): void;

/**
 * @description
 * Requires "Grab focus" enabled in the Configuration window.<br>
 * In order to use arrow keys, use {@link window.DlgCode}(DLGC_WANTARROWS) (see Flags.js > DLGC_WANTARROWS).
 *
 * @param {number} vkey Virtual Key Code, refer to {@link http://msdn.microsoft.com/en-us/library/ms927178.aspx}
 */
declare function on_key_up(vkey: number): void;

/**
 * @param {FbMetadbHandleList} handle_list
 */
declare function on_library_items_added(handle_list: FbMetadbHandleList): void;

/**
 * @param {FbMetadbHandleList} handle_list
 */
declare function on_library_items_changed(handle_list: FbMetadbHandleList): void;

/**
 * @param {FbMetadbHandleList} handle_list
 */
declare function on_library_items_removed(handle_list: FbMetadbHandleList): void;

/**
 * Called when thread created by {@link gdi.LoadImageAsync} is done.
 *
 * @param {number} cookie the return value from the {@link gdi.LoadImageAsync} call
 * @param {?GdiBitmap} image null on failure (invalid path/not an image)
 * @param {string} image_path the path that was originally supplied to {@link gdi.LoadImageAsync}
 */
declare function on_load_image_done(cookie: number, image: GdiBitmap | null, image_path: string): void;

/**
 * @description
 * On the main menu>File>Spider Monkey Panel, there are 10 menu items and whichever number
 * is selected is sent as the "index" to this callback. <br>
 * Being main menu items now means you can bind them to global keyboard shortcuts, standard toolbar buttons, panel stack splitter
 * buttons, etc.<br>
 * Remember to think carefully about where you use this code as you probably only
 * want it to run once and so don't include it in common files and scripts where you might have
 * multiple instances.<br>
 * Important: you should avoid sharing scripts containing this code so as not to conflict with what other users may already be using.
 *
 * @param {number} index
 *
 * @example
 * function on_main_menu(index) {
 *     switch (index) {
 *     case 1: // triggered when File>Spider Monkey Panel>1 is run
 *         do_something();
 *         break;
 *     case 2: // triggered when File>Spider Monkey Panel>2 is run
 *         do_something_else();
 *         break;
 *     }
 * }
 */
declare function on_main_menu(index: number): void;

/**
 * @description Called when metadb contents change.
 *
 * @param {FbMetadbHandleList} handle_list affected items
 * @param {boolean} fromhook true if notification is not from tag update, but a component that provides
 *                           tag-like data from a database. E.g. foo_playcount and {@link FbMetadbHandle#RefreshStats}
 */
declare function on_metadb_changed(handle_list: FbMetadbHandleList, fromhook: boolean): void;

/**
 * @param {number} x
 * @param {number} y
 * @param {number} mask see Flags.js > Mask
 */
declare function on_mouse_lbtn_dblclk(x: number, y: number, mask: number): void;

/**
 * @param {number} x
 * @param {number} y
 * @param {number} mask see Flags.js > Mask
 */
declare function on_mouse_lbtn_down(x: number, y: number, mask: number): void;

/**
 * @param {number} x
 * @param {number} y
 * @param {number} mask see Flags.js > Mask
 */
declare function on_mouse_lbtn_up(x: number, y: number, mask: number): void;

/**
 * @function
 */
declare function on_mouse_leave(): void;

/**
 * @param {number} x
 * @param {number} y
 * @param {number} mask see Flags.js > Mask
 */
declare function on_mouse_mbtn_dblclk(x: number, y: number, mask: number): void;

/**
 * @param {number} x
 * @param {number} y
 * @param {number} mask see Flags.js > Mask
 */
declare function on_mouse_mbtn_down(x: number, y: number, mask: number): void;

/**
 * @param {number} x
 * @param {number} y
 * @param {number} mask see Flags.js > Mask
 */
declare function on_mouse_mbtn_up(x: number, y: number, mask: number): void;

/**
 * @param {number} x
 * @param {number} y
 * @param {number} mask see Flags.js > Mask
 */
declare function on_mouse_move(x: number, y: number, mask: number): void;

/**
 * @param {number} x
 * @param {number} y
 * @param {number} mask see Flags.js > Mask
 */
declare function on_mouse_rbtn_dblclk(x: number, y: number, mask: number): void;

/**
 * @param {number} x
 * @param {number} y
 * @param {number} mask see Flags.js > Mask
 */
declare function on_mouse_rbtn_down(x: number, y: number, mask: number): void;

/**
 * @description
 * You must return true, if you want to suppress the default context menu.<br>
 * Note: left shift + left windows key will bypass this callback and will open default context menu.
 *
 * @param {number} x
 * @param {number} y
 * @param {number} mask see Flags.js > Mask
 *
 * @retuen {boolean}}
 */
declare function on_mouse_rbtn_up(x: number, y: number, mask: number): void;

/**
 * @description Scroll up/down
 *
 * @param {number} step scroll direction: -1 or 1
 */
declare function on_mouse_wheel(step: number): void;

/**
 * @description Scroll left/right
 *
 * @param {number} step scroll direction: -1 or 1
 */
declare function on_mouse_wheel_h(step: number): void;

/**
 * @description
 * Called in other panels after {@link window.NotifyOthers} is executed.<br>
 * <br>
 * <b>!!! Beware !!!</b><br>
 * 1. Data from `info` argument is only accessible inside `on_notify_data` callback:
 *    if stored and accessed outside of the callback it will throw JS error.<br>
 *    This also applies to the data produced from that `info`: e.g. storing `info.Path` directly (if `info` is FbMetadbHandle).<br>
 * 2. If you want to store the data from `info` you have to perform a deep copy:<br>
 *    - `String(info)` for strings.<br>
 *    - `JSON.parse(JSON.stringify(info))` for serializable objects.<br>
 *    - `new ObjectType(info)` for objects that have an approppriate constructor available, e.g. `new GdiBitmap(info)` or `new FbMetadbHandleList(info)`.<br>
 * 3. `info` argument is shared between panels, so it should NOT be modified in any way.
 *
 * @param {string} name
 * @param {*} info
 */
declare function on_notify_data(name: string, info: any): void;

/**
 * Called when output device changes. Use {@link fb.GetOutputDevices} to retrieve settings.<br>
 * Note: available only in foobar2000 v1.4 and later.
 *
 * @function
 */
declare function on_output_device_changed(): void;

/**
 * Called when window is ready to draw.
 *
 * @param {GdiGraphics} gr
 */
declare function on_paint(gr: GdiGraphics): void;

/**
 * @description Called when "playback follow cursor" state is changed.
 *
 * @param {boolean} state current "playback follow cursor" value
 */
declare function on_playback_follow_cursor_changed(state: boolean): void;

/**
 * @description Called when dynamic info (VBR bitrate etc) changes.
 *
 * @function
 */
declare function on_playback_dynamic_info(): void;

/**
 * @description
 * Called when Per-track dynamic info (stream track titles etc) changes.
 * Happens less often than {@link module:callbacks~on_playback_dynamic_info on_playback_dynamic_info}.
 *
 * @function
 */
declare function on_playback_dynamic_info_track(): void;

/**
 * @description
 * Called when currently playing file gets edited.<br>
 * It's also called by components that provide tag-like data such as foo_playcount.
 *
 * @param {FbMetadbHandle} handle
 */
declare function on_playback_edited(handle: FbMetadbHandle): void;

/**
 * @description Playback advanced to the new track.
 *
 * @param {FbMetadbHandle} handle
 */
declare function on_playback_new_track(handle: FbMetadbHandle): void;

/**
 * @description Called when playback order is changed.
 *
 * @param {any} new_order_index
 *     - 0 Default<br>
 *     - 1 Repeat (Playlist)<br>
 *     - 2 Repeat (Track)<br>
 *     - 3 Random<br>
 *     - 4 Shuffle (tracks)<br>
 *     - 5 Shuffle (albums)<br>
 *     - 6 Shuffle (folders)
 */
declare function on_playback_order_changed(new_order_index: number): void;

/**
 * @param {boolean} state true when paused, false when unpaused.
 */
declare function on_playback_pause(state: boolean): void;

/**
 * @param {number} origin
 *     - 0 User added<br>
 *     - 1 User removed<br>
 *     - 2 Playback advance
 */
declare function on_playback_queue_changed(origin: number): void;

/**
 * @param {float} time new position in seconds
 */
declare function on_playback_seek(time: number): void;

/**
 * Playback process is being initialized.<br>
 * {@link module:callbacks~on_playback_new_track on_playback_new_track} should be called soon after this when first file is successfully opened for decoding.
 *
 * @param {number} cmd
 *     - 0 Default<br>
 *     - 1 Play<br>
 *     - 2 Plays the next track from the current playlist according to the current playback order<br>
 *     - 3 Plays the previous track from the current playlist according to the current playback order<br>
 *     - 4 settrack (internal fb2k value)<br>
 *     - 5 Plays a random track from the current playlist<br>
 *     - 6 resume (internal fb2k value)
 * @param {boolean} is_paused Current paused state
 *
 */
declare function on_playback_starting(cmd: number, is_paused: boolean): void;

/**
 * @param {number} reason
 *     - 0 Invoked by user<br>
 *     - 1 End of file<br>
 *     - 2 Starting another track<br>
 *     - 3 Fb2k is shytting down<br>
 */
declare function on_playback_stop(reason: number): void;

/**
 * @description Called every second, for time display.
 *
 * @param {float} time current playback time in seconds
 */
declare function on_playback_time(time: number): void;

/**
 * @param {number} playlistIndex
 * @param {number} playlistItemIndex
 */
declare function on_playlist_item_ensure_visible(playlistIndex: number, playlistItemIndex: number): void;

/**
 * @param {number} playlistIndex
 */
declare function on_playlist_items_added(playlistIndex: number): void;

/**
 * @param {number} playlistIndex
 * @param {number} new_count
 */
declare function on_playlist_items_removed(playlistIndex: number, new_count: number): void;

/**
 * @description Changes selection too. Doesn't actually change the set of items that are selected or item having focus, just changes their order.
 *
 * @param {number} playlistIndex
 */
declare function on_playlist_items_reordered(playlistIndex: number): void;

/**
 * @description Workaround for some 3rd party playlist viewers not working with {@link module:callbacks~on_selection_changed on_selection_changed}.
 *
 * @function
 */
declare function on_playlist_items_selection_change(): void;

/**
 * @description Called when "stop after current" is enabled/disabled.
 *
 * @param {boolean} state "stop after current" value
 */
declare function on_playlist_stop_after_current_changed(state: boolean): void;

/**
 * @function
 */
declare function on_playlist_switch(): void;

/**
 * @description
 * Called when:<br>
 * - Playlists are added/removed/reordered/renamed.<br>
 * - A playlist's lock status changes through the use of components such as foo_utils or foo_playlist_attributes.
 *
 * @function
 */
declare function on_playlists_changed(): void;

/**
 * @description Note: available only in foobar2000 v1.4 and later.
 *
 * @param {number} new_mode
 *     - 0 None<br>
 *     - 1 Track<br>
 *     - 2 Album<br>
 *     - 3 Track/Album by Playback Order
 */
declare function on_replaygain_mode_changed(new_mode: number): void;

/**
 * @description
 * Called when:<br>
 * - Panel script is reloaded via context menu > Reload.<br>
 * - Panel script is changed via panel menu > Configure.<br>
 * - fb2k is exiting normally.<br>
 * Not called when:<br>
 * - Script fails with error.<br>
 * - fb2k closed externally (e.g. killed with process manager).<br>
 * - fb2k fails with exception.
 *
 * @function
 */
declare function on_script_unload(): void;

/**
 * @description Called when selection changes based on "File>Preferences>Display>Selection viewers".
 *
 * @function
 */
declare function on_selection_changed(): void;

/**
 * @description
 * Called when panel is resized.<br>
 * Note: width and height arguments have the same values as {@link window.Width} and {@link window.Height}.<br>
 * <b>IMPORTANT</b>: do NOT call {@link window.Repaint} from this callback!
 *
 * @param {number} width
 * @param {number} height
 */
declare function on_size(width: number, height: number): void;

/**
 * @param {float} val volume level in dB. Minimum is -100. Maximum is 0.
 */
declare function on_volume_change(val: number): void;

//# sourceMappingURL=Callbacks.d.ts.map