"use strict";
(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [1189],
  {
    97166: (e, t, i) => {
      i.r(t);
      var o = i(63477),
        a = i.n(o),
        n = i(59042),
        r = i(90435),
        l = i(31945),
        d = i(54856),
        c = i(2954),
        s = i(63111),
        u = i(19741),
        h = i(27049),
        p = i(46016),
        m = i(84374),
        g = i(12455),
        C = i(87141),
        v = i(96829),
        b = i(95185),
        f = i(89411),
        w = i(89019);
      const y = (0, c.aZ)({
          components: {
            TopBar: () =>
              Promise.all([i.e(1248), i.e(6263)]).then(i.bind(i, 66263)),
            ReadonlyTopBar: () =>
              Promise.all([i.e(1248), i.e(445)]).then(i.bind(i, 60445)),
            ReadwriteTopBar: () =>
              Promise.all([i.e(1248), i.e(325)]).then(i.bind(i, 80325)),
            TabBar: () => i.e(5648).then(i.bind(i, 75648)),
            Workbench: () => i.e(4626).then(i.bind(i, 84626)),
            MapShot: () =>
              Promise.all([i.e(8592), i.e(2611)]).then(i.bind(i, 12611)),
          },
          setup() {
            const e = (0, C.JE)().T,
              t = (0, u.y)(),
              i = (0, p.$)(),
              o = (0, c.Fl)(() => {
                var e;
                return (
                  (null === (e = (0, g.r)()) || void 0 === e
                    ? void 0
                    : e.activeEditorId) === window.editorId
                );
              }),
              a = (0, c.Fl)(() => "cn" === (0, C.qr)().serviceRegion),
              n = (0, c.Fl)(() => (0, f.FU)().fileId),
              r = (0, c.Fl)(() =>
                (0, f.FU)().fileId ? (0, f.FU)().title : ""
              ),
              l = (0, c.Fl)(() => (0, f.FU)().isDirty),
              d = (0, c.Fl)(
                () =>
                  (0, f.FU)().source.startsWith("cloud://") ||
                  (0, f.FU)().source.startsWith("new://host.xmind.app")
              ),
              y = (0, c.Fl)(() => (0, g.A)().contexts["activation.isValid"]),
              T = (0, c.Fl)(() => (0, g.A)().saving),
              I = (0, c.Fl)(() => (0, w.c)().connectionMode),
              k = (0, c.Fl)(() => (0, w.c)().isConnected),
              M = (0, c.Fl)(() => (0, C.S)().language),
              E = (0, c.Fl)(() => (0, C.S)().systemAppearance),
              x = (0, c.Fl)(() => (0, C.S)().spellCheck),
              S = (0, c.Fl)(() => i.mapshotMode),
              H = (0, c.Fl)(() => i.editorMode === s.Pq),
              L = (0, c.Fl)(() => (0, C.IW)().isPDVisible),
              V = (0, c.Fl)(() => i.isRightbarVisible),
              P = (0, c.Fl)(() => (0, C.S)().toolbarStyle === s.i_),
              A = (0, c.Fl)(() => {
                var e, t;
                return null !==
                  (t =
                    null === (e = (0, g.A)()) || void 0 === e
                      ? void 0
                      : e.ownerFrameId) && void 0 !== t
                  ? t
                  : "";
              }),
              F = (0, c.Fl)(() => {
                var e, t;
                return [
                  ...(null !==
                    (t =
                      null === (e = (0, g.r)()) || void 0 === e
                        ? void 0
                        : e.editorViewInfos) && void 0 !== t
                    ? t
                    : []),
                ];
              }),
              Z = (0, c.Fl)(() => {
                const e = (0, g.r)(),
                  t = (null == e ? void 0 : e.editorViewInfos.length) > 1;
                return (null == e ? void 0 : e.isShowTabBar) || t;
              }),
              O = (0, c.Fl)(() => {
                var e, t;
                return null !==
                  (t =
                    null === (e = (0, g.r)()) || void 0 === e
                      ? void 0
                      : e.activeEditorId) && void 0 !== t
                  ? t
                  : "";
              }),
              B = (0, c.Fl)(() => O.value === window.editorId),
              R = (0, c.Fl)(() => (0, m.nZ)().activeSheetViewerInited.value),
              $ = (0, c.Fl)(
                () =>
                  !!a.value &&
                  !!(0, C.km)().hasShownTutorial &&
                  !(0, C.Gu)().currentPromotion &&
                  !!(
                    y.value ||
                    d.value ||
                    (0, v.KC)((0, C.Gu)().lastShowPaywallDate, Date.now())
                  ) &&
                  !(0, C.km)().hasShownShareTutorial &&
                  !(d.value && !k.value)
              ),
              N = (e) => {
                var t;
                const i =
                  null === (t = (0, g.A)()) || void 0 === t
                    ? void 0
                    : t.commandById(e);
                return !!i && !!i.enabled;
              },
              W = (0, c.Fl)(() => {
                var e;
                return null === (e = (0, g.r)()) || void 0 === e
                  ? void 0
                  : e.tabbarScrollLeft;
              }),
              D = (0, c.Fl)(() => (0, f.FU)().source),
              U = (0, c.Fl)(() => {
                var e, t;
                const i =
                  null === (e = (0, g.r)()) || void 0 === e
                    ? void 0
                    : e.activeEditorId;
                if (!i) return;
                return (
                  null === (t = (0, g.r)().editorViewInfos) || void 0 === t
                    ? void 0
                    : t.find(({ id: e }) => e === i)
                ).source;
              }),
              q = (0, c.Fl)(() => {
                var t, i, o;
                return (0, w.c)().isRestoring
                  ? e("Restoring previous version...")
                  : (0, h.E)().sheetRendering
                  ? e("Loading...")
                  : (
                      null === (t = D.value) || void 0 === t
                        ? void 0
                        : t.startsWith("new")
                    )
                  ? e("Creating New Map ...")
                  : (null === (i = D.value) || void 0 === i
                      ? void 0
                      : i.startsWith("file-cache:")) ||
                    (null === (o = D.value) || void 0 === o
                      ? void 0
                      : o.startsWith("file:"))
                  ? e("Loading...")
                  : void 0;
              }),
              z = (0, c.Fl)(() => {
                var t, i, o;
                return (
                  null === (t = U.value) || void 0 === t
                    ? void 0
                    : t.startsWith("new")
                )
                  ? e("Creating New Map ...")
                  : (null === (i = U.value) || void 0 === i
                      ? void 0
                      : i.startsWith("file-cache:")) ||
                    (null === (o = U.value) || void 0 === o
                      ? void 0
                      : o.startsWith("file:"))
                  ? e("Loading...")
                  : void 0;
              });
            return (
              (0, c.YP)(
                (0, m.nZ)().isEditorFirstRendered,
                (e) => {
                  if (e) {
                    const e = (0, c.Fl)(() =>
                        H.value
                          ? [
                              {
                                type: "buttons",
                                buttons: [
                                  {
                                    icon: "static/images/touchbar/touchbar-indentTemplate.png",
                                    enabled: N("outliner.indent"),
                                    click: "command:outliner.indent",
                                  },
                                  {
                                    icon: "static/images/touchbar/touchbar-outdentTemplate.png",
                                    enabled: N("outliner.outdent"),
                                    click: "command:outliner.outdent",
                                  },
                                  {
                                    icon: "static/images/touchbar/touchbar-notesTemplate.png",
                                    enabled: N("editor.showNotesEditor"),
                                    click: "command:editor.showNotesEditor",
                                  },
                                ],
                              },
                            ]
                          : [
                              {
                                type: "buttons",
                                buttons: [
                                  {
                                    icon: "static/images/touchbar/touchbar-topicTemplate.png",
                                    enabled: N("editor.addTopic"),
                                    click: "command:editor.addTopic",
                                  },
                                  {
                                    icon: "static/images/touchbar/touchbar-subtopicTemplate.png",
                                    iconPosition: "overlay",
                                    enabled: N("editor.addSubTopic"),
                                    click: "command:editor.addSubTopic",
                                  },
                                  {
                                    icon: "static/images/touchbar/touchbar-relationshipTemplate.png",
                                    enabled: N("editor.addRelationship"),
                                    click: "command:editor.addRelationship",
                                  },
                                  {
                                    icon: "static/images/touchbar/touchbar-summaryTemplate.png",
                                    enabled: N("editor.addSummary"),
                                    click: "command:editor.addSummary",
                                  },
                                  {
                                    icon: "static/images/touchbar/touchbar-boundaryTemplate.png",
                                    enabled: N("editor.addBoundary"),
                                    click: "command:editor.addBoundary",
                                  },
                                  {
                                    icon: "static/images/touchbar/touchbar-notesTemplate.png",
                                    enabled: N("editor.showNotesEditor"),
                                    click: "command:editor.showNotesEditor",
                                  },
                                ],
                              },
                              {
                                type: "buttons",
                                buttons: [
                                  {
                                    icon: "static/images/touchbar/touchbar-zenTemplate.png",
                                    click: "command:workbench.toggleZenMode",
                                  },
                                ],
                              },
                            ]
                      ),
                      { updateTouchBarItems: t } = (0, b.q)(e, {}, !0);
                    t();
                  }
                },
                { immediate: !0 }
              ),
              (0, c.bv)(async () => {
                (0, c.YP)(
                  r,
                  (e) => {
                    var t, i;
                    e &&
                      (null === (t = (0, g.A)()) ||
                        void 0 === t ||
                        t.changeTitle(e),
                      null === (i = window.getCurrentWindowAsync) ||
                        void 0 === i ||
                        i.call(window).then((t) => t.setTitle(e)));
                  },
                  { immediate: !0 }
                ),
                  (0, c.YP)(
                    () => {
                      var e;
                      return null === (e = (0, g.A)()) || void 0 === e
                        ? void 0
                        : e.title;
                    },
                    (e) => {
                      var t;
                      null === (t = (0, g.r)()) ||
                        void 0 === t ||
                        t.updateEditorViewInfo({
                          id: window.editorId,
                          title: e,
                          source: D.value,
                        });
                    },
                    { immediate: !0 }
                  ),
                  (0, c.YP)(l, (e) => {
                    var t;
                    return null === (t = (0, g.A)()) || void 0 === t
                      ? void 0
                      : t.changeIsDirty(e);
                  }),
                  (0, c.YP)(
                    () => i.editorMode,
                    (e) => {
                      var t;
                      return null === (t = (0, g.A)()) || void 0 === t
                        ? void 0
                        : t.setEditorMode(e);
                    }
                  );
              }),
              {
                isFromCloud: d,
                fileId: n,
                title: r,
                isDirty: l,
                isSaving: T,
                connectionMode: I,
                isConnected: k,
                language: M,
                spellCheck: x,
                systemAppearance: E,
                isOutlineMode: H,
                isActivationValid: y,
                isPDVisible: L,
                isRightbarVisible: V,
                isIconOnly: P,
                frameId: A,
                editorViewInfos: F,
                isShowTabBar: Z,
                activeEditorId: O,
                mapshotMode: S,
                progressText: q,
                isActivateEditor: o,
                activeEditorProgressText: z,
                isEditorTabChange: B,
                tabbarScrollLeft: W,
                isMindMapInited: R,
                isShareTutorialVisible: $,
                canHandleCommand: N,
                handleCommand: (e) => {
                  (0, C.JX)().handleCommand(e);
                },
                handleCommandsRegister: (e) => {
                  t.registerCommands(e);
                },
                handleTabbarScroll: (e) => {
                  (0, g.r)().updateTabbarScrollLeft(e);
                },
              }
            );
          },
        }),
        T = y;
      const I = (0, i(51900).Z)(
        T,
        function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t(
            "div",
            {
              staticClass:
                "vk-window-default uk-overflow-hidden uk-height-1-1 vk-scrollbar",
              staticStyle: { background: "var(--color-fill-container)" },
              attrs: { id: "app", spellcheck: e.spellCheck },
            },
            [
              e.isFromCloud
                ? [
                    "readwrite" === e.connectionMode && e.isConnected
                      ? t("readwrite-top-bar", {
                          attrs: {
                            title: e.title,
                            language: e.language,
                            "system-appearance": e.systemAppearance,
                            "is-activation-valid": e.isActivationValid,
                            "is-p-d-visible": e.isPDVisible,
                            "is-rightbar-visible": e.isRightbarVisible,
                            "is-icon-only": e.isIconOnly,
                            "can-handle-command": e.canHandleCommand,
                            "is-register-app-region-event": !0,
                            "is-editor-tab-change": e.isEditorTabChange,
                            "is-activate-editor": e.isActivateEditor,
                            "is-mind-map-inited": e.isMindMapInited,
                            "is-share-tutorial-visible":
                              e.isShareTutorialVisible,
                          },
                          on: {
                            "on-toolbar-item-click": e.handleCommand,
                            "on-insert-menu-item-click": e.handleCommand,
                            "on-icon-only-change": e.handleCommand,
                            "on-commands-register": e.handleCommandsRegister,
                          },
                        })
                      : t("readonly-top-bar", {
                          attrs: {
                            title: e.title,
                            "is-register-app-region-event": !0,
                            "is-activate-editor": e.isActivateEditor,
                            "is-mind-map-inited": e.isMindMapInited,
                            "can-handle-command": e.canHandleCommand,
                            "file-id": e.fileId,
                            "is-share-tutorial-visible":
                              e.isShareTutorialVisible,
                          },
                          on: { "on-toolbar-item-click": e.handleCommand },
                        }),
                  ]
                : t("top-bar", {
                    attrs: {
                      title: e.title,
                      "is-dirty": e.isDirty,
                      "is-saving": e.isSaving,
                      language: e.language,
                      "system-appearance": e.systemAppearance,
                      "is-outline-mode": e.isOutlineMode,
                      "is-activation-valid": e.isActivationValid,
                      "is-p-d-visible": e.isPDVisible,
                      "is-rightbar-visible": e.isRightbarVisible,
                      "is-icon-only": e.isIconOnly,
                      "can-handle-command": e.canHandleCommand,
                      "is-register-app-region-event": !0,
                      "is-editor-tab-change": e.isEditorTabChange,
                      "is-activate-editor": e.isActivateEditor,
                      "is-share-tutorial-visible": e.isShareTutorialVisible,
                    },
                    on: {
                      "on-toolbar-item-click": e.handleCommand,
                      "on-insert-menu-item-click": e.handleCommand,
                      "on-icon-only-change": e.handleCommand,
                      "on-commands-register": e.handleCommandsRegister,
                    },
                  }),
              e._v(" "),
              t("tab-bar", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: e.isShowTabBar,
                    expression: "isShowTabBar",
                  },
                ],
                attrs: {
                  "frame-id": e.frameId,
                  "active-editor-id": e.activeEditorId,
                  "editor-view-infos": e.editorViewInfos,
                  "scroll-left": e.tabbarScrollLeft,
                },
                on: { scroll: e.handleTabbarScroll },
              }),
              e._v(" "),
              t(
                "div",
                {
                  staticClass: "vk-window-body uk-panel uk-overflow-hidden",
                  staticStyle: { background: "var(--color-fill-container)" },
                },
                [
                  t("workbench", {
                    attrs: {
                      "progress-text": e.progressText,
                      "active-editor-progress-text": e.activeEditorProgressText,
                    },
                  }),
                  e._v(" "),
                  e.mapshotMode ? t("map-shot") : e._e(),
                ],
                1
              ),
            ],
            2
          );
        },
        [],
        !1,
        null,
        "260da112",
        null
      ).exports;
      var k = i(59474),
        M = i(18264);
      const E = "focusContextsGroup",
        x = "focusedElementTag",
        S = "focusTrigger",
        H = "focusNoEffect",
        L = "cannotGetFocusByMouse";
      var V = i(75425);
      const P = {
        copy: { actionId: "copy", expr: "!selection.hasImageLoadingFailed" },
        cut: { actionId: "cut", expr: "!selection.hasImageLoadingFailed" },
        paste: { actionId: "paste" },
        duplicate: { actionId: "mutate:duplicateTopic" },
        undo: { actionId: "undo" },
        redo: { actionId: "redo" },
        delete: { actionId: "mutate:delete" },
        deleteSingleTopic: { actionId: "mutate:deleteTopicNodeOnly" },
        selectAll: { actionId: "mutate:selectAll" },
        selectAllSiblingTopics: { actionId: "mutate:selectAllSiblingTopics" },
        selectAllSameLevelTopics: {
          actionId: "mutate:selectAllSameLevelTopics",
        },
        selectAllDescendantTopics: {
          actionId: "mutate:selectAllDescendantTopics",
        },
        selectAllFloatingTopics: { actionId: "mutate:selectAllFloatingTopics" },
        selectAllSummaryTopics: { actionId: "mutate:selectAllSummaryTopics" },
        selectAllCalloutTopics: { actionId: "mutate:selectAllCalloutTopics" },
        selectAllRelationships: { actionId: "mutate:selectAllRelationships" },
        selectAllBoundaries: { actionId: "mutate:selectAllBoundaries" },
        selectAllImages: { actionId: "mutate:selectAllImages" },
        selectAllEquations: { actionId: "mutate:selectAllEquations" },
        "editor.addTopic": { actionId: "mutate:insertTopicAfter" },
        "editor.addSubTopic": { actionId: "mutate:insertSubtopic" },
        "editor.addParentTopic": { actionId: "mutate:insertParentTopic" },
        "editor.addTopicBefore": { actionId: "mutate:insertTopicBefore" },
        "editor.preAddFloatingTopic": {
          actionId: "mutate:insertFloatingTopic",
        },
        "editor.addRelationship": { actionId: "mutate:createRelationship" },
        "editor.addBoundary": { actionId: "mutate:insertBoundary" },
        "editor.addCallout": { actionId: "mutate:insertCallout" },
        "editor.toggleBranchFoldedState": {
          actionId: "mutate:toggleBranchFoldedState",
        },
        "editor.addSummary": { actionId: "mutate:insertSummary" },
        "editor.zoomIn": { actionId: "mutateEditor:zoomIn" },
        "editor.zoomOut": { actionId: "mutateEditor:zoomOut" },
        "editor.resetZoom": { actionId: "mutateEditor:resetZoom" },
        "editor.fitMap": { actionId: "mutateEditor:fitMap" },
        "editor.focusAndSelectCenter": { actionId: "mutate:goToCentralTopic" },
        "editor.showBranchOnly": { actionId: "mutate:showBranchOnly" },
        "editor.exitBranchOnly": { actionId: "mutate:exitShowBranchOnly" },
        "editor.foldBranch": { actionId: "mutate:foldBranch" },
        "editor.unfoldBranch": { actionId: "mutate:unfoldBranch" },
        "editor.foldAllDescendantBranches": {
          actionId: "mutate:foldAllDescendantBranches",
        },
        "editor.unfoldAllDescendantBranches": {
          actionId: "mutate:unfoldAllDescendantBranches",
        },
        "editor.changeImage": { actionId: "mutate:insertImage" },
        "editor.rotateImage": { actionId: "mutate:rotateImage" },
        "editor.resetImage": { actionId: "mutate:resetTopicImageSize" },
        "editor.addMarker": { actionId: "mutate:addMarker" },
        "editor.deleteMarker": { actionId: "mutate:removeMarker" },
        "editor.copyStyle": { actionId: "copyStyle" },
        "editor.pasteStyle": { actionId: "pasteStyle" },
        "editor.resetStyle": { actionId: "mutate:resetStyle" },
        "editor.updateStyle": { actionId: "mutate:updateStyle" },
        "editor.updateStyleToSameLevel": {
          actionId: "mutate:updateStyleToSameLevel",
        },
        "editor.distributeTopicsVertically": {
          actionId: "mutate:distributeTopicsVertically",
        },
        "editor.distributeTopicsHorizontally": {
          actionId: "mutate:distributeTopicsHorizontally",
        },
        "editor.alignTopicsToTop": { actionId: "mutate:alignTopicsToTop" },
        "editor.alignTopicsToBottom": {
          actionId: "mutate:alignTopicsToBottom",
        },
        "editor.alignTopicsToLeft": { actionId: "mutate:alignTopicsToLeft" },
        "editor.alignTopicsToRight": { actionId: "mutate:alignTopicsToRight" },
        "editor.alignTopicsToMiddle": {
          actionId: "mutate:alignTopicsToMiddle",
        },
        "editor.alignTopicsToCenter": {
          actionId: "mutate:alignTopicsToCenter",
        },
        "editor.showEditBox": { actionId: "mutate:startEditingTopic" },
        "editor.hideEditBox": { actionId: "mutate:endEditingTitle" },
        "editor.finishEditBox": { actionId: "mutate:finishEditingTitle" },
        "editor.newSheetFromTopic": {
          actionId: "mutate:createSheetWithSelectedTopic",
        },
        "editor.addSheet": { actionId: "mutateEditor:newSheet" },
        "editor.removeTaskInfo": { actionId: "mutate:removeTaskInfo" },
        "editor.removeAudioNotes": { actionId: "mutate:removeAudioNotes" },
        "editor.removeAttachment": { actionId: "mutate:removeAttachment" },
        "editor.removeTopicHref": { actionId: "mutate:removeTopicHref" },
        "editor.resetPosition": { actionId: "mutate:resetPosition" },
        "editor.exchangeSiblingTopicUp": {
          actionId: "mutate:exchangeSiblingTopicUpward",
        },
        "editor.exchangeSiblingTopicDown": {
          actionId: "mutate:exchangeSiblingTopicDownward",
        },
        "editor.exchangeSiblingTopicLeft": {
          actionId: "mutate:exchangeSiblingTopicLeftward",
        },
        "editor.exchangeSiblingTopicRight": {
          actionId: "mutate:exchangeSiblingTopicRightward",
        },
        "editor.moveTopicToTop": {
          actionId: "mutate:exchangeSiblingTopicFirst",
        },
        "editor.moveTopicToBottom": {
          actionId: "mutate:exchangeSiblingTopicLast",
        },
        "editor.increaseFontSize": { actionId: "mutate:increaseFontSize" },
        "editor.decreaseFontSize": { actionId: "mutate:decreaseFontSize" },
        "editor.boldText": { actionId: "mutate:setFontBold" },
        "editor.italicText": { actionId: "mutate:setFontItalic" },
        "editor.strikethroughText": { actionId: "mutate:setTextLineThrough" },
        "editor.uppercaseText": { actionId: "mutate:setTextUppercase" },
        "editor.lowercaseText": { actionId: "mutate:setTextLowercase" },
        "editor.capitalizeText": { actionId: "mutate:setTextCapitalize" },
        "editor.alignTextLeft": { actionId: "mutate:setTextAlignLeft" },
        "editor.centerText": { actionId: "mutate:setTextAlignCenter" },
        "editor.alignTextRight": { actionId: "mutate:setTextAlignRight" },
        "editor.setStyleAsVeryImportant": {
          actionId: "mutate:setStyleAsVeryImortant",
        },
        "editor.setStyleAsImportant": { actionId: "mutate:setStyleAsImortant" },
        "editor.setStyleAsCrossOut": { actionId: "mutate:setStyleAsCrossOut" },
        "editor.setStyleAsDefault": { actionId: "mutate:setStyleAsDefault" },
        "editor.updateStyleToSameLevelTopics": {
          actionId: "mutate:updateStyleToSameLevel",
        },
        "editor.updateStyleToSameTypeTopics": {
          actionId: "mutate:updateStyle",
        },
        "editor.keepTextOnly": { actionId: "mutate:keepTextOnly" },
        "editor.selectionNavigateUpWithShift": {
          actionId: "mutate:multiSelectUpward",
        },
        "editor.selectionNavigateDownWithShift": {
          actionId: "mutate:multiSelectDownward",
        },
        "editor.selectionNavigateLeftWithShift": {
          actionId: "mutate:multiSelectLeftward",
        },
        "editor.selectionNavigateRightWithShift": {
          actionId: "mutate:multiSelectRightward",
        },
        "editor.toggleBranchLevelOne": {
          actionId: "mutate:foldBranchLevelOne",
        },
        "editor.toggleBranchLevelTwo": {
          actionId: "mutate:foldBranchLevelTwo",
        },
        "editor.toggleBranchLevelThree": {
          actionId: "mutate:foldBranchLevelThree",
        },
        "editor.toggleBranchLevelFour": {
          actionId: "mutate:foldBranchLevelFour",
        },
        "editor.toggleBranchLevelFive": {
          actionId: "mutate:foldBranchLevelFive",
        },
        "editor.toggleBranchLevelSix": {
          actionId: "mutate:foldBranchLevelSix",
        },
        "editor.toggleBranchLevelSeven": {
          actionId: "mutate:foldBranchLevelSeven",
        },
        "editor.toggleBranchLevelEight": {
          actionId: "mutate:foldBranchLevelEight",
        },
        "editor.toggleBranchLevelNine": {
          actionId: "mutate:foldBranchLevelNine",
        },
        "editor.addTodo": { actionId: "mutate:addTodo" },
        "editor.removeTodo": { actionId: "mutate:removeTodo" },
        "editor.checkTodo": { actionId: "mutate:checkTodo" },
        "editor.uncheckTodo": { actionId: "mutate:uncheckTodo" },
        "editor.resetRelationshipPointPositions": {
          actionId: "mutate:resetRelationshipPointPositions",
        },
        "editor.applyingNumberingAttributesToSiblings": {
          actionId: "mutate:applyingNumberingAttributesToSiblings",
        },
        "editor.clearText": { actionId: "mutate:deleteTopicTitleText" },
      };
      Object.keys(P).forEach((e) => {
        const t = P[e];
        void 0 === t.expr && (t.expr = "default");
      });
      const A = (e, t) => {
          var i;
          const o = P[e];
          return !(null === (i = t[null == o ? void 0 : o.actionId]) ||
          void 0 === i
            ? void 0
            : i.disabled);
        },
        F = (e, t) => {
          const i = P[e];
          if (i) {
            let e = i.expr;
            return (
              (e = e ? `(${e})&selection` : e),
              t && (e = e ? `(${e})&(${t})` : t),
              Z(e)
            );
          }
          return !1;
        },
        Z = (e, t) => {
          const i = (0, g.A)();
          return (0, V.ku)({
            contexts: null == i ? void 0 : i.aggregatedContexts,
            expr: e,
            testFn: t,
          });
        },
        O = V.f$,
        B = (e) => `editor/${e}/mindmap`,
        R = (e) => `editor/${e}`,
        $ = (e) => `editor/${e}/frame`,
        N = (e) => `editor/${e}/collaboration`,
        W = (e) => `editor/${e}/mindmap/beginnerMode`,
        D = (e) => `editor/${e}/mindmap/editTitleMode`,
        U = (e) => `editor/${e}/mapShot`,
        q = () => {
          const e = R(window.editorId),
            t = (0, C.JE)().T,
            i = Z;
          return [
            ...[
              {
                id: "workbench.toggleFindAndReplace",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
              {
                id: "workbench.toggleTopicNavigationPanel",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
              {
                id: "workbench.toggleNoteNavigationPanel",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.toggleLabelAndMarkerNavigationPanel",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.showNoteNavigationPanelAndSelect",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.showLabelNavigationPanelAndSelect",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.showMarkerNavigationPanelAndSelect",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.showTaskNavigationPanelAndSelect",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.highlightCurrentLabel",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.highlightCurrentMarker",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.highlightCurrentTask",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
            ],
            ...[
              {
                id: "workbench.toggleRightPanel",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
              {
                id: "workbench.toggleTopicPanel",
                enabled: i(
                  "selection.hasTopic|selection.hasImage|selection.hasBoundary|selection.hasRelationship|selection.hasSummary",
                  () =>
                    (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode
                ),
                provider: e,
              },
              {
                id: "workbench.toggleSlidePanel",
                enabled: i(
                  "selection.hasTopic",
                  () =>
                    (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode
                ),
                provider: e,
              },
              {
                id: "workbench.toggleMapPanel",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.toggleSkeletonPanel",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.toggleColorThemePanel",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "themeEditor",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
            ],
            ...[
              {
                id: "workbench.toggleMarkerPanel",
                enabled: i(
                  "!selection.hasImage",
                  () => (0, p.$)().isWorkbenchReady
                ),
                provider: e,
              },
              {
                id: "workbench.toggleStickerPanel",
                enabled: i(
                  "selection.hasTopic",
                  () =>
                    (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode
                ),
                provider: e,
              },
              {
                id: "workbench.toggleIllustrationPanel",
                enabled: i(
                  "selection.hasTopic",
                  () =>
                    (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode
                ),
                provider: e,
              },
            ],
            ...[
              {
                id: "workbench.toggleZenMode",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.showZenMode",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
            ],
            ...[
              {
                id: "workbench.mapMode",
                enabled:
                  (0, p.$)().isWorkbenchReady && (0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.outlineMode",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.switchToMapOrOutliner",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
              {
                id: "editor.toggleSheetBar",
                label: (0, h.E)().isSheetBarVisible
                  ? t("Hide Sheet Bar")
                  : t("Show Sheet Bar"),
                enabled: (0, h.E)().mindmapCreated,
                provider: e,
              },
              {
                id: "editor.toggleTopicCountLabel",
                enabled: (0, h.E)().mindmapCreated,
                provider: e,
              },
            ],
            ...[
              {
                id: "editor.showLabelEditor",
                enabled: i(
                  "selection.hasTopic",
                  () =>
                    (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode
                ),
                provider: e,
              },
              {
                id: "editor.showEquationEditor",
                enabled: i(
                  "(selection.hasEquation&selection.single)|(selection.hasTopic&selection.single)",
                  () =>
                    (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode
                ),
                provider: e,
              },
              {
                id: "editor.showNotesEditor",
                enabled: i(
                  "selection.single&selection.hasTopic",
                  () =>
                    (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode
                ),
                provider: e,
              },
              {
                id: "editor.showTaskEditor",
                enabled: i(
                  "selection.single&selection.hasTopic",
                  () =>
                    (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode
                ),
                provider: e,
              },
              {
                id: "editor.showMarkerPopup",
                enabled: i(
                  "selection.single&selection.hasTopic",
                  () => (0, p.$)().isWorkbenchReady
                ),
                provider: e,
              },
            ],
            ...[
              {
                id: "editor.addLocalImage",
                enabled: i(
                  "selection.single&selection.hasTopic|selection.hasImage",
                  () =>
                    (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode
                ),
                provider: e,
              },
              {
                id: "editor.showHyperlinkEditor",
                enabled: i(
                  "selection.allTopics&!selection.hasTopicWithAttachmentOrAudioNote",
                  () =>
                    (0, p.$)().isWorkbenchReady &&
                    (0, h.E)().isAllowInsertHyperLink &&
                    !(0, p.$)().isOutlinerMode
                ),
                provider: e,
              },
              {
                id: "editor.showTopiclinkEditor",
                enabled: i(
                  "selection.single&selection.hasTopic&!selection.hasTopicWithAttachmentOrAudioNote",
                  () =>
                    (0, p.$)().isWorkbenchReady &&
                    (0, h.E)().isAllowInsertHyperLink &&
                    !(0, p.$)().isOutlinerMode
                ),
                provider: e,
              },
              {
                id: "editor.addFileLink",
                enabled: i(
                  "selection.allTopics&!selection.hasTopicWithAttachmentOrAudioNote",
                  () =>
                    (0, p.$)().isWorkbenchReady &&
                    (0, h.E)().isAllowInsertHyperLink &&
                    !(0, p.$)().isOutlinerMode
                ),
                provider: e,
              },
              {
                id: "editor.addFolderLink",
                enabled: i(
                  "selection.allTopics&!selection.hasTopicWithAttachmentOrAudioNote",
                  () =>
                    (0, p.$)().isWorkbenchReady &&
                    (0, h.E)().isAllowInsertHyperLink &&
                    !(0, p.$)().isOutlinerMode
                ),
                provider: e,
              },
              {
                id: "editor.addAttachmentOnNewTopic",
                enabled: i(
                  "selection.single&selection.hasTopic&!selection.hasCallout",
                  () =>
                    (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode
                ),
                provider: e,
              },
              {
                id: "editor.addAudioOnNewTopic",
                enabled: i(
                  "selection.single&selection.hasTopic&!selection.hasCallout",
                  () =>
                    (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode
                ),
                provider: e,
              },
            ],
            ...[
              {
                id: "workbench.exportPng1",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.exportJpeg",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.exportSvg1",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.exportPdf",
                enabled: i(
                  "default",
                  () =>
                    (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode
                ),
                provider: e,
              },
              {
                id: "workbench.exportMd",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
              {
                id: "workbench.exportOPML",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
              {
                id: "workbench.exportExcel",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
              {
                id: "workbench.exportPowerPoint",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
              {
                id: "workbench.exportTextBundle",
                enabled: i("default", () => (0, p.$)().isWorkbenchReady),
                provider: e,
              },
              {
                id: "workbench.exportWord",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
              {
                id: "workbench.exportBranchPng",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.exportBranchSvg",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.exportBranchPdf",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.exportBranchMd",
                enabled:
                  (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
            ],
            ...[
              {
                id: "shareXmindLink",
                enabled: i(
                  "!collaboration.isReadOnly",
                  () => (0, p.$)().isWorkbenchReady
                ),
                provider: e,
              },
              {
                id: "shareXmindLinkOfCN",
                enabled: i(
                  "!collaboration.isReadOnly",
                  () => (0, p.$)().isWorkbenchReady
                ),
                provider: e,
              },
              {
                id: "shareMail",
                enabled: i(
                  "!collaboration.isReadOnly",
                  () => (0, p.$)().isWorkbenchReady
                ),
                provider: e,
              },
              {
                id: "shareBlog",
                enabled: i(
                  "!collaboration.isReadOnly",
                  () => (0, p.$)().isWorkbenchReady
                ),
                provider: e,
              },
              {
                id: "shareBiggerPlate",
                enabled: i(
                  "!collaboration.isReadOnly",
                  () => (0, p.$)().isWorkbenchReady
                ),
                provider: e,
              },
              {
                id: "shareEvernote",
                enabled: i(
                  "!collaboration.isReadOnly",
                  () =>
                    (0, p.$)().isWorkbenchReady &&
                    !!(0, C.Ak)().oauthToken &&
                    !!(0, C.Ak)().username
                ),
                provider: e,
              },
              {
                id: "sharePinterest",
                enabled: i(
                  "!collaboration.isReadOnly",
                  () => (0, p.$)().isWorkbenchReady
                ),
                provider: e,
              },
              {
                id: "shareTwitter",
                enabled: i(
                  "!collaboration.isReadOnly",
                  () => (0, p.$)().isWorkbenchReady
                ),
                provider: e,
              },
              {
                id: "shareFacebook",
                enabled: i(
                  "!collaboration.isReadOnly",
                  () => (0, p.$)().isWorkbenchReady
                ),
                provider: e,
              },
            ],
            ...[
              {
                id: "print",
                enabled: (0, p.$)().isWorkbenchReady,
                provider: e,
              },
              {
                id: "printBranch",
                enabled: i(
                  "selection.single|selection.hasTopic|selection.hasFloatingTopic|selection.hasSummary",
                  () =>
                    (0, p.$)().isWorkbenchReady && !(0, p.$)().isOutlinerMode
                ),
                provider: e,
              },
            ],
            ...[
              {
                id: "showMapShot",
                enabled:
                  !(0, p.$)().isOutlinerMode &&
                  !(0, p.$)().mapshotMode &&
                  !(0, p.$)().zenMode,
                provider: e,
              },
              {
                id: "mapShot",
                enabled:
                  !(0, p.$)().isOutlinerMode &&
                  !(0, p.$)().mapshotMode &&
                  !(0, p.$)().zenMode,
                provider: e,
              },
            ],
            ...[
              { id: "editor.toggleBeginnerMode", enabled: !0, provider: e },
              { id: "editor.toggleBeginnerModeTips", enabled: !0, provider: e },
              {
                id: "mergeXMindFiles",
                enabled: (0, h.E)().mindmapCreated,
                provider: e,
              },
              {
                id: "createTheme",
                enabled:
                  (0, p.$)().isWorkbenchReady &&
                  !(0, p.$)().isOutlinerMode &&
                  (0, h.E)().mindmapCreated,
                provider: e,
              },
              {
                id: "customizeTheme",
                enabled:
                  (0, h.E)().mindmapCreated && !(0, p.$)().isOutlinerMode,
                provider: e,
              },
              {
                id: "workbench.setpassword",
                enabled:
                  !(0, p.$)().isOutlinerMode && (0, h.E)().mindmapCreated,
                provider: e,
              },
              {
                id: "editor.rotateImageLeft",
                enabled: i(
                  "!selection.hasImageLoadingFailed",
                  () => (0, p.$)().isWorkbenchReady
                ),
                provider: e,
              },
            ],
            ...[
              {
                id: "editor.enterPitchMode",
                enabled:
                  (0, p.$)().isWorkbenchReady &&
                  !(0, p.$)().isOutlinerMode &&
                  !(0, p.$)().zenMode,
                provider: e,
              },
              {
                id: "editor.enterPitchModeWindowed",
                enabled:
                  (0, p.$)().isWorkbenchReady &&
                  !(0, p.$)().isOutlinerMode &&
                  !(0, p.$)().zenMode,
                provider: e,
              },
              {
                id: "editor.enterPitchPresenterViewMode",
                enabled:
                  (0, p.$)().isWorkbenchReady &&
                  !(0, p.$)().isOutlinerMode &&
                  !(0, p.$)().zenMode,
                provider: e,
              },
            ],
          ];
        },
        z = () => {
          const e = B(window.editorId),
            t = Z,
            { actionStates: i } = (0, m.nZ)(),
            o = (0, C.JE)().T,
            a = F,
            n = [],
            r = P;
          Object.keys(r)
            .filter((e) => "editor.showEditBox" !== e)
            .forEach((t) => {
              var o;
              const l = r[t],
                d =
                  !(null === (o = i.value[null == l ? void 0 : l.actionId]) ||
                  void 0 === o
                    ? void 0
                    : o.disabled) && (0, h.E)().mindmapCreated;
              (!d && l.deactivatedWhenDisabled) ||
                n.push({
                  id: t,
                  enabled: d ? a(t) : 0,
                  provider: e,
                  enabledFn: (e) => {
                    const i = a(t);
                    return e ? O(i) : i;
                  },
                });
            });
          const l =
              A("editor.showBranchOnly", i.value) ||
              A("editor.exitBranchOnly", i.value),
            d = A("editor.exitBranchOnly", i.value)
              ? o("Show Full Content")
              : o("Show Branch Only"),
            c =
              A("editor.foldBranch", i.value) ||
              A("editor.unfoldBranch", i.value),
            s = A("editor.foldBranch", i.value)
              ? o("Fold Subtopic")
              : o("Unfold Subtopic"),
            u =
              A("editor.foldAllDescendantBranches", i.value) ||
              A("editor.unfoldAllDescendantBranches", i.value),
            g = A("editor.foldAllDescendantBranches", i.value)
              ? o("Fold All Sub-Branches")
              : o("Unfold All Sub-Branches"),
            v = (0, C.S)().shouldShowGuidelineForMovingTopics
              ? o("Disable Smart Guideline")
              : o("Enable Smart Guideline");
          return (
            n.push(
              {
                id: "editor.toggleBranchOnly",
                label: d,
                enabled: l && (0, h.E)().mindmapCreated,
                provider: e,
              },
              {
                id: "editor.toggleBranch",
                label: s,
                enabled: t("selection.hasTopic", () => c),
                provider: e,
              },
              {
                id: "editor.toggleAllBranch",
                label: g,
                enabled: t("default", () => u),
                provider: e,
              },
              {
                id: "editor.toggleShowGuideline",
                label: v,
                enabled: t("default"),
                provider: e,
              },
              {
                id: "editor.editInfoItem",
                enabled: t("selection.single&selection.hasTopic"),
                provider: e,
              },
              {
                id: "editor.saveAsAudioNote",
                enabled: t("default"),
                provider: e,
              },
              {
                id: "editor.saveAsAttachment",
                enabled: t("default"),
                provider: e,
              },
              {
                id: "editor.saveAsImage",
                enabled: t("!selection.hasImageLoadingFailed"),
                provider: e,
              },
              {
                id: "editor.saveAsEquation",
                enabled: t("!selection.hasImageLoadingFailed"),
                provider: e,
              },
              {
                id: "editor.resizeEquation",
                enabled: t(
                  "!selection.hasImageLoadingFailed",
                  () => (0, p.$)().isWorkbenchReady
                ),
                provider: e,
              },
              {
                id: "editor.removeMarker",
                enabled: t("selection.hasTopicWithMarker"),
                provider: e,
              },
              {
                id: "editor.removeLabel",
                enabled: t("selection.hasTopicWithLabel"),
                provider: e,
              },
              {
                id: "editor.removeTodo",
                enabled: t("selection.hasTopicWithTodo"),
                provider: e,
              },
              {
                id: "editor.cancelTask",
                enabled: t("selection.hasTopicWithTodo"),
                provider: e,
              },
              {
                id: "editor.removeLink",
                enabled: t("selection.hasTopicWithLink"),
                provider: e,
              },
              {
                id: "editor.removeTopicContent",
                enabled: t(
                  "!selection.onlyTopicWithMarker&!selection.onlyTopicWithLabel&!selection.onlyTopicWithTodo&!selection.onlyTopicWithLink&(selection.hasTopicWithMarker|selection.hasTopicWithLabel|selection.hasTopicWithTodo|selection.hasTopicWithLink)"
                ),
                provider: e,
              },
              {
                id: "editor.removeMarkerForTopicContextMenu",
                enabled: t("selection.onlyTopicWithMarker"),
                provider: e,
              },
              {
                id: "editor.removeLabelForTopicContextMenu",
                enabled: t("selection.onlyTopicWithLabel"),
                provider: e,
              },
              {
                id: "editor.removeTodoForTopicContextMenu",
                enabled: t("selection.onlyTopicWithTodo"),
                provider: e,
              },
              {
                id: "editor.removeLinkForTopicContextMenu",
                enabled: t("selection.onlyTopicWithLink"),
                provider: e,
              },
              {
                id: "editor.removeNote",
                enabled: t(
                  "selection.hasTopic",
                  () => (0, p.$)().isWorkbenchReady
                ),
                provider: e,
              },
              {
                id: "editor.toggleTopicNotesDisplay",
                enabled: t(
                  "selection.hasTopic&selection.hasTopicNotes",
                  () => (0, p.$)().isWorkbenchReady
                ),
                provider: e,
              },
              {
                id: "editor.removeStickerOrImageOrEquation",
                enabled: t(
                  "selection.hasTopic",
                  () => (0, p.$)().isWorkbenchReady
                ),
                provider: e,
              },
              {
                id: "editor.keepTextOnly",
                enabled: t(
                  "selection.hasTopic",
                  () => (0, p.$)().isWorkbenchReady
                ),
                provider: e,
              },
              {
                id: "editor.previousSheet",
                enabled: t("default", () => (0, p.$)().isWorkbenchReady),
                provider: e,
              },
              {
                id: "editor.nextSheet",
                enabled: t("default", () => (0, p.$)().isWorkbenchReady),
                provider: e,
              },
              {
                id: "editor.exchangeSiblingTopicLeft",
                enabled: t(
                  "selection.hasTopic",
                  () => (0, p.$)().isWorkbenchReady
                ),
                provider: e,
              },
              {
                id: "editor.exchangeSiblingTopicRight",
                enabled: t(
                  "selection.hasTopic",
                  () => (0, p.$)().isWorkbenchReady
                ),
                provider: e,
              },
              {
                id: "editor.showEditBox",
                enabled: t("!selection.none"),
                provider: e,
              },
              {
                id: "editor.previewImage",
                enabled: t("!selection.hasImageLoadingFailed"),
                provider: e,
              },
              ...[
                "editor.toggleBranchLevelOne",
                "editor.toggleBranchLevelTwo",
                "editor.toggleBranchLevelThree",
                "editor.toggleBranchLevelFour",
                "editor.toggleBranchLevelFive",
                "editor.toggleBranchLevelSix",
                "editor.toggleBranchLevelSeven",
                "editor.toggleBranchLevelEight",
                "editor.toggleBranchLevelNine",
              ].map((i) => ({
                id: i,
                enabled: t("selection.hasTopic"),
                provider: e,
              })),
              ...[
                "editor.addMarkerOne",
                "editor.addMarkerTwo",
                "editor.addMarkerThree",
                "editor.addMarkerFour",
                "editor.addMarkerFive",
                "editor.addMarkerSix",
                "editor.addMarkerSeven",
              ].map((i) => ({
                id: i,
                enabled: t("selection.hasTopic"),
                provider: e,
              })),
              ...[
                {
                  id: "editor.changeNumberingPatternToNone",
                  actionName: "mutateProperty:topicNumberingPattern",
                },
                {
                  id: "editor.changeNumberingPatternToNumeralArabic",
                  actionName: "mutateProperty:topicNumberingPattern",
                },
                {
                  id: "editor.changeNumberingPatternToAlphabetUppercase",
                  actionName: "mutateProperty:topicNumberingPattern",
                },
                {
                  id: "editor.changeNumberingPatternToAlphabetLowercase",
                  actionName: "mutateProperty:topicNumberingPattern",
                },
                {
                  id: "editor.changeNumberingPatternToNumeralRoman",
                  actionName: "mutateProperty:topicNumberingPattern",
                },
                {
                  id: "editor.toggleNumberingTieredEnabled",
                  actionName: "mutateProperty:topicNumberingTieredEnabled",
                },
                {
                  id: "editor.toggleNumberingStartsHereEnabled",
                  actionName: "mutateProperty:topicNumberingStartsHereEnabled",
                },
              ].map(({ id: t, actionName: o }) => {
                var a;
                return {
                  id: t,
                  enabled: !(null === (a = i.value[o]) || void 0 === a
                    ? void 0
                    : a.disabled),
                  provider: e,
                };
              })
            ),
            n
          );
        },
        G = () => {
          var e;
          const t = $(window.editorId),
            i = (0, g.r)(),
            o =
              (null !== (e = null == i ? void 0 : i.editorViewInfos) &&
              void 0 !== e
                ? e
                : []
              ).length > 1;
          return [
            {
              id: "frame.addNewTab",
              label: "New Tab",
              enabled: !0,
              provider: t,
            },
            { id: "frame.previousTab", enabled: o, provider: t },
            { id: "frame.nextTab", enabled: o, provider: t },
            {
              id: "frame.toggleTabbar",
              label:
                (null == i ? void 0 : i.isShowTabBar) || o
                  ? "Hide Tab Bar"
                  : "Show Tab Bar",
              enabled: !o,
              provider: t,
            },
            {
              id: "closeSimpleWindow",
              label: o ? "Close Tab" : "Close Window",
              enabled: !0,
              provider: t,
            },
            {
              id: "closeComplexWindow",
              label: "Close Window",
              enabled: o,
              provider: t,
            },
          ];
        },
        _ = () => {
          const e = D(window.editorId);
          return [
            { id: "copy", enabled: Z("mindmap.inEditTitleMode"), provider: e },
            {
              id: "escape",
              enabled: Z("mindmap.inEditTitleMode"),
              provider: e,
            },
            { id: "cut", enabled: Z("mindmap.inEditTitleMode"), provider: e },
            { id: "copy", enabled: Z("mindmap.inEditTitleMode"), provider: e },
            { id: "paste", enabled: Z("mindmap.inEditTitleMode"), provider: e },
            {
              id: "editor.addMarker",
              enabled: Z(
                "mindmap.inEditTitleMode&selection.single&selection.hasTopic"
              ),
              provider: e,
            },
            {
              id: "editor.changeImage",
              enabled: Z(
                "mindmap.inEditTitleMode&selection.single&selection.hasTopic"
              ),
              provider: e,
            },
            {
              id: "editor.strikethroughText",
              enabled: Z("mindmap.inEditTitleMode"),
              provider: e,
            },
            {
              id: "editor.italicText",
              enabled: Z("mindmap.inEditTitleMode"),
              provider: e,
            },
            {
              id: "editor.boldText",
              enabled: Z("mindmap.inEditTitleMode"),
              provider: e,
            },
            {
              id: "editor.increaseFontSize",
              enabled: Z("mindmap.inEditTitleMode"),
              provider: e,
            },
            {
              id: "editor.decreaseFontSize",
              enabled: Z("mindmap.inEditTitleMode"),
              provider: e,
            },
            {
              id: "insertText",
              enabled: Z("mindmap.inEditTitleMode"),
              provider: e,
            },
          ];
        },
        j = () => {
          const e = W(window.editorId);
          return [
            {
              id: "editor.addSubTopic",
              enabled: F("editor.addSubTopic", "editor.inBeginnerMode"),
              provider: e,
            },
            {
              id: "editor.addTopic",
              enabled: F("editor.addTopic", "editor.inBeginnerMode"),
              provider: e,
            },
            {
              id: "editor.showEditBox",
              enabled: Z("editor.inBeginnerMode"),
              provider: e,
            },
            { id: "escape", enabled: Z("editor.inBeginnerMode"), provider: e },
          ];
        },
        X = () => {
          const e = U(window.editorId),
            t = (0, p.$)();
          return [
            {
              id: "showMapShot",
              enabled: !t.isOutlinerMode && !t.mapshotMode,
              provider: e,
            },
            { id: "mapShot", enabled: !t.isOutlinerMode, provider: e },
            { id: "editor.zoomIn", enabled: !0, provider: e },
            { id: "editor.zoomOut", enabled: !0, provider: e },
            { id: "editor.resetZoom", enabled: !0, provider: e },
            { id: "editor.fitMap", enabled: !0, provider: e },
          ];
        };
      var J = i(80356);
      const Y = () => {
        const { actionStates: e } = (0, m.nZ)(),
          t = (0, C.JE)().T,
          i = "cn" === (0, C.qr)().serviceRegion,
          o = N(window.editorId),
          a = Z,
          n = [],
          r =
            "!mindmap.inEditTitleMode&!mindmap.inDraggingMode&!focus.input&!focus.popover&!editor.inPopoverMode",
          l =
            "!editor.inBeginnerDialog&!editor.inIMEMode&!editor.inMapShotMode";
        if (!(0, f.FU)().source.startsWith("cloud://"))
          return (
            n.push({
              id: "collaboration.uploadLocalFile",
              enabled: a(
                `${l}&collaboration`,
                () =>
                  (0, p.$)().isWorkbenchReady &&
                  !(0, p.$)().pitchMode &&
                  (0, C.c7)().user
              ),
              provider: o,
            }),
            n
          );
        i &&
          n.push({
            id: "collaboration.report",
            enabled: !(0, w.c)().isFileOwner,
            provider: o,
          }),
          n.push(
            {
              id: "versionHistory",
              enabled: (0, w.c)().isFileOwner && !i,
              provider: o,
            },
            {
              id: "collaboration.duplicateFile",
              enabled: "readwrite" === (0, w.c)().connectionMode,
              provider: o,
            },
            {
              id: "collaboration.inviteCollaborators",
              enabled: a(`${l}&collaboration`, () => {
                var e;
                return (
                  (0, p.$)().isWorkbenchReady &&
                  !(0, p.$)().pitchMode &&
                  ((0, w.c)().isConnected ||
                    (null === (e = (0, w.c)().cloudFileMeta) || void 0 === e
                      ? void 0
                      : e.isStaticShare))
                );
              }),
              provider: o,
            },
            {
              id: "undo",
              enabled: a(`${r}&collaboration`, () => (0, J.C)().canUndo()) > 0,
              provider: o,
            },
            {
              id: "redo",
              enabled: a(`${r}&collaboration`, () => (0, J.C)().canRedo()) > 0,
              provider: o,
            },
            {
              id: "editor.addLocalImage",
              enabled: a(
                `${l}&collaboration&selection.single&selection.hasTopic|selection.hasImage`,
                () => (0, p.$)().isWorkbenchReady && !(0, p.$)().pitchMode
              ),
              provider: o,
            },
            {
              id: "editor.addAttachmentOnNewTopic",
              enabled: a(
                `${l}&collaboration&selection.single&selection.hasTopic&!selection.hasCallout`,
                () => (0, p.$)().isWorkbenchReady && !(0, p.$)().pitchMode
              ),
              provider: o,
            },
            {
              id: "editor.previewImage",
              enabled: a(`${r}&collaboration&!selection.hasImageLoadingFailed`),
              provider: o,
            },
            {
              id: "editor.showEditBox",
              enabled: a(`${r}&collaboration&!selection.none`),
              provider: o,
            },
            {
              id: "workbench.exportTextBundle",
              enabled: a(
                `${l}&collaboration`,
                () => (0, p.$)().isWorkbenchReady
              ),
              provider: o,
            }
          );
        const d = [
            {
              id: "editor.deleteMarker",
              enabled: a(`${r}&collaboration`, () =>
                A("editor.deleteMarker", e.value)
              ),
              provider: o,
            },
            {
              id: "delete",
              enabled: a(`${r}&collaboration`, () => A("delete", e.value)),
              provider: o,
            },
            {
              id: "deleteSingleTopic",
              enabled: a(`${r}&collaboration`, () =>
                A("deleteSingleTopic", e.value)
              ),
              provider: o,
            },
            {
              id: "cut",
              enabled: a(
                `${r}&collaboration&!selection.hasImageLoadingFailed`,
                () => A("cut", e.value)
              ),
              provider: o,
            },
            {
              id: "editor.toggleBranch",
              label: t("Fold Subtopic"),
              enabled: a(`${r}&collaboration&selection.hasTopic`, () =>
                A("editor.foldBranch", e.value)
              ),
              provider: o,
            },
            {
              id: "editor.toggleAllBranch",
              label: t("Fold All Sub-Branches"),
              enabled: a(`${r}&collaboration`, () =>
                A("editor.foldAllDescendantBranches", e.value)
              ),
              provider: o,
            },
          ],
          c = {
            "editor.deleteMarker": "mutate:removeMarker",
            delete: "mutate:delete",
            deleteSingleTopic: "mutate:deleteTopicNodeOnly",
            cut: "cut",
            "editor.toggleBranch": "mutate:foldBranch",
            "editor.toggleAllBranch": "mutate:foldAllDescendantBranches",
          };
        return (
          d.forEach((e) => {
            (0, J.C)().checkLocked(c[e.id], { withNotification: !1 }) &&
              n.push(e);
          }),
          n
        );
      };
      var K = i(53775);
      var Q = i(20993),
        ee = i(64805),
        te = i(77995);
      function ie({
        activeSheet: e,
        document: t,
        viewerState: i,
        executeMutationAction: o,
      }) {
        var a;
        if ((0, h.E)().isTopicLinkDialogShowing) return;
        const { selection: n } = i,
          l = n && "topics" === n.kind && n.topics[0];
        if (!l) return;
        const c =
          null === (a = e.query({ id: l })) || void 0 === a
            ? void 0
            : a.asTopic();
        if (!c) return;
        (0, h.E)().changeIsTopicLinkDialogShowing(!0);
        const s = "xmind:#",
          u = c && c.href;
        let p = !1,
          g = null;
        u && u.startsWith(s) && ((g = u.substr(7)), (p = !0));
        let C = r.ZP.route((0, d.zj)(window.editorId), async () =>
          (async () => JSON.stringify(await m.HG.serializeDocument(t)))()
        );
        r.ZP.fetch(d.Fx, {
          name: "dialog-topiclink",
          parentId: window.id,
          wait: !0,
          query: {
            hasTopicLink: p,
            xmindObjectId: g,
            editorId: window.editorId,
          },
        })
          .then(({ result: e }) => {
            e &&
              o({
                name: "mutate:insertTopicLink",
                payload: {
                  targetTopicId: e.topicId,
                  shouldInsertReverseLink: "set" === e.action && e.twoWay,
                  isRemove: "remove" === e.action,
                },
              });
          })
          .catch(() => {})
          .finally(() => {
            C && (C(), (C = null)),
              (0, h.E)().changeIsTopicLinkDialogShowing(!1);
          });
      }
      var oe = i(67657),
        ae = i(94593),
        ne = i(33394),
        re = i(5893);
      async function le(e) {
        const { T: t } = (0, C.JE)(),
          { executePropertyAction: i } = (0, m.nZ)(),
          {
            filePaths: o,
            bookmarks: a,
            canceled: n,
          } = await oe.dialog.showOpenDialog((0, oe.getCurrentWindow)(), {
            properties: "folder" === e ? ["openDirectory"] : ["openFile"],
            buttonLabel: t("Insert"),
            securityScopedBookmarks: !0,
          });
        if (n || !o || !o.length) return;
        const r = o[0];
        if (!ae.Z.existsSync(r)) return;
        if (a && a.length === o.length)
          for (let e = 0; e < o.length; e++) {
            const t = o[e],
              i = a[e];
            t && i && (await ne.Z.bindBookmark({ fp: t, bookmark: i }));
          }
        i({ name: "mutateProperty:fileLink", inputValue: (0, re.u3)(r) });
      }
      var de = i(13382),
        ce = i(71017),
        se = i.n(ce);
      var ue = i(83282),
        he = i(18621);
      function pe() {
        var e;
        !(function () {
          const e = (0, p.$)();
          e.isRightbarVisible && e.updateRightBarPanel({ visible: !1 });
          e.isSearchPanelVisible && e.updateSearchPanel({ visible: !1 });
        })(),
          (0, p.$)().setMapshotMode(!0),
          null === (e = (0, g.A)()) ||
            void 0 === e ||
            e.updateContexts({ "editor.inMapShotMode": !0 });
      }
      function me() {
        var e;
        (0, p.$)().mapshotMode
          ? ((0, p.$)().setMapshotMode(!1),
            null === (e = (0, g.A)()) ||
              void 0 === e ||
              e.updateContexts({ "editor.inMapShotMode": !1 }),
            oe.getCurrentWindow().setFullScreenable(!0),
            (0, he.L9)({ eventAction: "enterMapShot" }))
          : (0, C.JX)().handleCommand("showMapShot");
      }
      var ge = i(47306),
        Ce = i(55733),
        ve = i.n(Ce),
        be = i(87244);
      async function fe() {
        (0, he.L9)({
          eventCategory: "Tools",
          eventAction: "clickMergeXMindFiles",
        });
        const e = (0, C.JE)().T,
          { result: t } = await r.ZP.fetch(d.Fx, {
            name: "dialog-merging-options",
            parentId: window.id,
            wait: !0,
          });
        if (null === t) return;
        const { canceled: i, filePaths: o } = await oe.dialog.showOpenDialog({
          properties: ["openFile", "multiSelections"],
          filters: [{ name: e("Xmind Workbook"), extensions: ["xmind"] }],
        });
        i ||
          (await (async function (e, t) {
            if (!e || !e.length) return;
            (0, he.L9)({
              eventCategory: "Tools",
              eventAction: "startMergeXMindFiles",
              eventName: `target: ${
                t.mergeIntoMultiSheet ? "Multiple Sheets" : "Current Map"
              }, createIndexSheet: ${t.createIndexSheet}, fileCount: ${
                e.length
              }`,
            });
            let i = !0;
            const o = 1e3,
              a = new Date().getTime();
            1 === e.length &&
              ae.Z.statSync(e[0]).size < s.tZ.FILE_SIZE &&
              (i = !1);
            i &&
              (await r.ZP.fetch(d.Fx, {
                name: "dialog-progress",
                parentId: window.id,
                height: s.Us["dialog-progress"].height - 30,
                query: {
                  type: "merging",
                  editorId: window.editorId,
                  fileTotalCount: e.length,
                },
              }));
            (0, g.A)().setMerging(!0);
            const n = (0, C.JE)().T,
              l = [],
              c = [],
              { executeEditorAction: u } = (0, m.nZ)(),
              { stage: p, passwordHelper: b } = (0, f.FU)();
            try {
              for (const t of e) {
                const e = se().basename(t),
                  i = await ae.Z.readFile(t);
                try {
                  const t = await we(p, b, await (0, ge.Zp)(i.buffer), e);
                  t ? c.push(t) : l.push(e);
                } catch (t) {
                  l.push(e);
                }
              }
              if (
                (await u({
                  name: "mutateEditor:mergeXmindFiles",
                  payload: t.mergeIntoCurrentSheet
                    ? { stages: c, intoCurrentMap: !0 }
                    : {
                        stages: c,
                        intoSheets: !0,
                        generateAMapOfContents: t.createIndexSheet,
                      },
                }),
                t.mergeIntoCurrentSheet)
              ) {
                const { updateSheetRendering: e, sheetRenderingStartAt: t } =
                  (0, h.E)();
                (0, h.E)().updateSheetRendering({
                  sheetRendering: !0,
                  sheetRenderingStartAt: new Date().getTime(),
                }),
                  await (0, v._v)(100);
                const i = new Date().getTime() - t;
                i < s.oY && (await (0, v._v)(s.oY - i)),
                  e({ sheetRendering: !1, sheetRenderingStartAt: null });
              }
              const n = new Date().getTime() - a;
              i && n < o && (await (0, v._v)(o - n));
            } catch (e) {
              throw e;
            } finally {
              i && (await r.ZP.fetch(d.g_, { name: "dialog-progress" })),
                (0, g.A)().setMerging(!1),
                (0, g.A)().updateMergingProgress(0),
                l.length &&
                  (await r.ZP.fetch(d.Fx, {
                    name: "dialog-err",
                    height: s.Us["dialog-err"].height,
                    payload: {
                      isCustomError: !0,
                      autoExpand: !0,
                      expansionHeight: 115,
                      code: "mergeFailed",
                      title: n(
                        "Failed to Merge $1 $2",
                        `${l.length}`,
                        l.length > 1 ? n("Files") : n("File")
                      ),
                      message: l
                        .map((e, t) => `${t + 1}. ${e.split(".xmind")[0]}`)
                        .join("\n"),
                    },
                  }));
            }
          })(o, t));
      }
      async function we(e, t, i, o) {
        const a = await ve().loadAsync(i),
          n = await (0, be.iw)(i, o, e, t);
        if ("needToClose" in n) return null;
        const r = n.content;
        return {
          take: async (e) => a.file(e).async("uint8array"),
          add: async (e, t) => {},
          delete: async (e) => {},
          toUrl: async (e) => e,
          getDocument: async () => r,
          setDocument: (e) => {},
        };
      }
      function ye() {
        const e = oe.BrowserWindow.getAllWindows().filter(
          (e) =>
            e.getTitle() === s.tL &&
            e.getParentWindow() &&
            e.getParentWindow().id === window.id
        );
        e.length && e[0].close();
        const t = "CUSTOM-" + (0, v.hb)();
        (0, C.JX)().handleCommand("themeEditor", {
          id: t,
          editorId: window.editorId,
          parentId: window.id,
          openType: "create-theme",
        }),
          (0, he.L9)({
            eventCategory: "ThemeEditor",
            eventAction: "createTheme",
          });
      }
      function Te() {
        (0, he.L9)({
          eventCategory: "ThemeEditor",
          eventAction: "clickCustomizeTheme",
        }),
          (0, p.$)().updateRightBarPanel({
            visible: !0,
            panel: ee.QN.THEME,
            tab: ee.x9.MAP,
            win: ee.ML.CUSTOM_THEME,
          });
      }
      var Ie = i(23352);
      const ke = (0, Ie.ZP)("editor:set-password");
      async function Me() {
        const {
          password: e,
          passwordHint: t,
          changeDirty: i,
          changePassword: o,
        } = (0, f.FU)();
        r.ZP.fetch(d.Fx, {
          name: "dialog-setpassword",
          parentId: window.id,
          wait: !0,
          query: {
            oldPassword: null != e ? e : "",
            passwordHint: null != t ? t : "",
          },
        })
          .then(({ result: e = {} } = {}) => {
            if (!e) return;
            const { action: t, newPassword: a, newPasswordHint: n } = e;
            "set" === t
              ? (o({ password: a, passwordHint: n }), i(!0))
              : "remove" === t &&
                (o({ password: null, passwordHint: null }), i(!0));
          })
          .catch((e) => {
            ke.error(e);
          });
      }
      var Ee = i(97769);
      async function xe() {
        const { executeMutationAction: e } = (0, m.nZ)();
        e({ name: "mutate:rotateImage", payload: Le("left") });
      }
      const { rotateRasterImage: Se, rotateSvgImage: He } =
          m.viewerKit.makeImageRotator(document, window),
        Le = (e) => async (t) => {
          const { resourcePath: i, width: o, height: a } = t,
            { stage: n } = (0, f.FU)(),
            r = Buffer.from(await n.take(i)),
            l = r.toString("base64");
          if (!l) return t;
          const d = se().extname(i),
            c =
              ".svg" === d
                ? He(Ve(l), e)
                : await Se(
                    `data:${(await (0, Ee.fromBuffer)(r)).mime};base64,${l}`,
                    e
                  );
          if (!c) return t;
          const { createXapUrlByArrayBuffer: s } = (0, m.nZ)();
          return {
            resourcePath: (await s(await c.arrayBuffer(), d)).slice(4),
            width: a,
            height: o,
          };
        },
        Ve = (e) => {
          const t = Uint8Array.from(atob(e), (e) => e.charCodeAt(0)).buffer;
          return new TextDecoder().decode(t);
        };
      function Pe(e, t) {
        const { updateSearchPanel: i, updateSearchPanelHighlightItem: o } = (0,
        p.$)();
        switch (e) {
          case ee.qz.NOTE:
            i({ visible: !0, tab: ee.It.NOTE }), o(t);
            break;
          case ee.qz.LABEL:
            i({ visible: !0, tab: ee.It.TAG }),
              (0, C.JX)().handleCommand(
                "workbench.highlightCurrentLabel",
                t.selectedLabel
              );
            break;
          case ee.qz.MARKER:
            i({ visible: !0, tab: ee.It.TAG }),
              (0, C.JX)().handleCommand(
                "workbench.highlightCurrentMarker",
                t.markerId
              );
            break;
          case ee.qz.TASK:
            i({ visible: !0, tab: ee.It.TAG }),
              (0, C.JX)().handleCommand(
                "workbench.highlightCurrentTask",
                t.taskInfo
              );
        }
      }
      function Ae(e, t) {
        const { updateSearchPanelHighlightItem: i } = (0, p.$)(),
          { executeEditorAction: o } = (0, m.nZ)();
        switch (e) {
          case ee.qz.LABEL:
            i(t),
              o({
                name: "mutateEditor:setHighlightLabels",
                payload: [t.selectedLabel],
              }),
              o({ name: "mutateEditor:setHighlightMarkers", payload: [] }),
              o({ name: "mutateEditor:setHighlightTasks", payload: [] });
            break;
          case ee.qz.MARKER:
            i(t),
              o({
                name: "mutateEditor:setHighlightMarkers",
                payload: [t.markerId],
              }),
              o({ name: "mutateEditor:setHighlightLabels", payload: [] }),
              o({ name: "mutateEditor:setHighlightTasks", payload: [] });
            break;
          case ee.qz.TASK:
            i(t),
              o({ name: "mutateEditor:setHighlightMarkers", payload: [] }),
              o({ name: "mutateEditor:setHighlightLabels", payload: [] }),
              o({
                name: "mutateEditor:setHighlightTasks",
                payload: [t.taskInfo],
              });
        }
      }
      var Fe = i(85786),
        Ze = i(51091);
      async function Oe(e, t, i = {}) {
        const { saveCurrentSheetOnly: o, currentSheetIndex: a, meta: n } = i;
        if (n) {
          const i = decodeURIComponent(e.title + ".xmind"),
            r = oe.app.getPath("temp"),
            l = se().join(r, i);
          return (
            o && Number.isInteger(a) && a >= 0
              ? await t({
                  filePath: l,
                  toEncrypt: !1,
                  sheetIndexes: [a],
                  inject: (e) => ({ ...e, ...Be(n) }),
                })
              : await t({
                  filePath: l,
                  toEncrypt: !1,
                  inject: (e) => ({ ...e, ...Be(n) }),
                }),
            ae.Z.readFile(l)
          );
        }
        {
          const i = decodeURIComponent(e.title + ".xmind"),
            o = oe.app.getPath("temp"),
            a = se().join(o, i);
          return (
            await t({
              filePath: a,
              toEncrypt: !1,
              inject: (e) => ({ ...e, ...Be({}) }),
            }),
            ae.Z.readFile(a)
          );
        }
      }
      function Be(e) {
        var t, i, o, a, n, r, l, d, c, s, u;
        return {
          DESCRIPTION: null !== (t = e.description) && void 0 !== t ? t : "",
          Author:
            null !==
              (o = null === (i = e.author) || void 0 === i ? void 0 : i.name) &&
            void 0 !== o
              ? o
              : "",
          downloadable:
            1 === (null === (a = e.share) || void 0 === a ? void 0 : a.privacy),
          Thumbnail: {
            Origin: {
              X:
                null !==
                  (r =
                    null === (n = e.thumbnail) || void 0 === n
                      ? void 0
                      : n.x) && void 0 !== r
                  ? r
                  : 0,
              Y:
                null !==
                  (d =
                    null === (l = e.thumbnail) || void 0 === l
                      ? void 0
                      : l.y) && void 0 !== d
                  ? d
                  : 0,
            },
          },
          Create: { Time: new Date() },
          Share: {
            Privacy:
              null === (c = e.share) || void 0 === c ? void 0 : c.privacy,
            Downloadable:
              1 ===
              (null === (s = e.share) || void 0 === s ? void 0 : s.privacy)
                ? 1
                : 0,
            LanguageChannel:
              null === (u = e.share) || void 0 === u ? void 0 : u.lang,
          },
        };
      }
      function Re(e) {
        return We("", e).replace(/[\x00-\x08\x0b-\x0c\x0e-\x1f]/g, "");
      }
      const $e = "<br />",
        Ne = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
      function We(e, t) {
        let i = e + Ze.encodeXML(t.title || "") + $e;
        e += Ne;
        for (const o of t.children) i += We(e, o);
        for (const e of t.detachedChildren) i += We(Ne, e);
        return i;
      }
      var De = i(96026),
        Ue = i.n(De);
      const qe = 1,
        ze = 3,
        Ge = (0, Ie.ZP)("editor:share-to-library");
      function _e(e) {
        let t = e.split(","),
          i = t[0].match(/:(.*?);/)[1],
          o = atob(t[1]),
          a = o.length,
          n = new Uint8Array(a);
        for (; a--; ) n[a] = o.charCodeAt(a);
        return new Blob([n], { type: i });
      }
      const je = (0, Ie.ZP)("shareHandler:");
      async function Xe(e) {
        const t = await (async function (e) {
          if (!["evernote", "biggerplate", "email"].includes(e)) {
            const { user: e } = (0, C.c7)();
            if (!Boolean(e)) {
              let e;
              const t = new Promise((t) => {
                e = (0, c.YP)(
                  () => (0, C.c7)().user,
                  (i) => {
                    e(), t(i);
                  }
                );
              });
              if (
                !(await r.ZP.fetch(d.Fx, {
                  name: "dialog-signin",
                  wait: !0,
                  query: { ignoreOpenDialog: !0 },
                }).then(({ result: i }) => (i && i.success ? t : (e(), !1))))
              )
                return !1;
            }
          }
          return (0, C.qr)().usableShareItems.includes(e);
        })(e);
        if (!t) return;
        const i = window.editorId,
          {
            sheets: o,
            activeSheet: a,
            activeSheetFigure: n,
            getSheetViewer: l,
          } = (0, m.nZ)(),
          u = r.ZP.route(
            (0, d.vN)(window.editorId),
            async ({ sheetId: e, exportImageOptions: t }) => {
              const {
                  format: i,
                  padding: o,
                  aspectRatio: a,
                  noBackground: n,
                  skipFont: r,
                  maximumWidth: d,
                  maximumHeight: c,
                } = t,
                s = l(e);
              if ("SVG" === i) {
                const e = await s.exportSVGElement({
                  padding: o ? m.viewerKit.insetsOf(o) : null,
                  aspectRatio: a,
                  opaqueBackground: !n,
                  disableEmbedFonts: r,
                  maximumWidth: d,
                  maximumHeight: c,
                });
                return {
                  data: e.outerHTML,
                  width: e.getAttribute("width"),
                  height: e.getAttribute("height"),
                };
              }
              if ("PNG" === i) {
                return {
                  data: await s.exportRasterImage("png", {
                    padding: o ? m.viewerKit.insetsOf(o) : null,
                    aspectRatio: a,
                    opaqueBackground: !n,
                    disableEmbedFonts: r,
                    maximumWidth: d,
                    maximumHeight: c,
                  }),
                };
              }
            }
          ),
          { source: h, title: p } = (0, f.FU)(),
          { upload: g, canceled: v } = (function ({
            type: e,
            editorId: t,
            sheetId: i,
          }) {
            const o = (0, c.iH)(!1),
              a = (0, c.iH)(),
              n = (0, c.iH)(""),
              l = (0, c.iH)(!1),
              { sheets: u } = (0, m.nZ)(),
              { T: h } = (0, C.JE)(),
              { saveAsLocalFile: p } = (0, f.FU)(),
              g = async (e) => {
                const i = await r.ZP.fetch((0, d.vN)(t), {
                  sheetId: e,
                  exportImageOptions: {
                    format: "PNG",
                    padding: 16,
                    aspectRatio: 42 / 26,
                    noBackground: !1,
                    skipFont: !1,
                    maximumWidth: 2100,
                    maximumHeight: 1300,
                  },
                });
                return (i.buffer = _e(i.data)), i;
              },
              v = async () => {
                if (!o.value) {
                  if (!a.value)
                    try {
                      a.value = await r.ZP.fetch(d.lf.CREATE_UPLOAD_SESSION, {
                        title: n.value,
                      });
                    } catch (e) {
                      throw e;
                    }
                  return a.value;
                }
              },
              b = async ({
                description: e,
                lang: t,
                uploadCurrentSheetOnly: a,
              }) => {
                if (o.value) return;
                const r = l.value ? ze : qe,
                  d = await v();
                if (!d) return;
                const c = await g(i),
                  s = c.buffer,
                  h = u.value.findIndex(({ id: e }) => e === i),
                  m = { width: c.width, height: c.height };
                return Oe(
                  { title: n.value },
                  async (e) => {
                    const {
                      filePath: t,
                      toEncrypt: i,
                      sheetIndexes: o,
                      inject: a,
                    } = e;
                    await p(t, {
                      toEncrypt: i,
                      sheetIndexes: null != o ? o : Ue()(u.value.length),
                      preprocessMetadata: (e) => a(e),
                      thumbnail: await (null == s ? void 0 : s.arrayBuffer()),
                    });
                  },
                  {
                    saveCurrentSheetOnly: a,
                    currentSheetIndex: h,
                    meta: {
                      description: e,
                      author: { name: (0, C.c7)().user },
                      share: { privacy: r, lang: t, url: d.url },
                      thumbnail: { image: s, x: m.width, y: m.height },
                    },
                  }
                );
              },
              w = async () => {
                const e = await v();
                if (e)
                  return (async () => {
                    if (!o.value)
                      return new Promise((t, i) => {
                        const o = async () => {
                          const { status: a } = await r.ZP.fetch(
                            d.lf.UPLOAD_MAP,
                            { session: e.session, action: "query" }
                          );
                          (a !== s.DU.UPLOADING && a !== s.DU.PROCESSING) ||
                            setTimeout(async () => {
                              await o();
                            }, 500),
                            a === s.DU.ERROR &&
                              (Ge.warn("Error in query uploading progress"),
                              i("Something wrong in uploading")),
                            a === s.DU.FINISHED && t();
                        };
                        try {
                          o();
                        } catch (e) {
                          if (
                            e.code === s.Xb.E_KEY_NOT_EXIST ||
                            e.code === s.W1
                          )
                            throw { code: s.W1, message: "Session expired" };
                          throw e;
                        }
                      });
                    try {
                      await r.ZP.fetch(d.lf.UPLOAD_MAP, {
                        session: e.session,
                        action: "cancel",
                      });
                    } catch (e) {
                      throw e;
                    }
                  })();
              };
            return {
              canceled: o,
              getPreview: g,
              getUploadInfo: v,
              compress: b,
              upload: async (t, i, c, u = !1, p = !1) => {
                if (o.value) return;
                (l.value = p), (n.value = t);
                const m = await v();
                if (!m) return;
                if ("xmind-share-of-cn" === e && !m.submitUrl)
                  throw new Error("no submitUrl");
                const g = {
                  map: [
                    await b({
                      description: i,
                      lang: c,
                      uploadCurrentSheetOnly: u,
                    }),
                    `${t}.xmind`,
                  ],
                  session: m.session,
                  action: "upload",
                };
                try {
                  await r.ZP.fetch(d.lf.UPLOAD_MAP, g);
                } catch (e) {
                  if (e.code === s.Xb.E_PARAM_MISSING)
                    throw { code: 401, message: "Session expired" };
                  throw e;
                }
                return w().then(() => async () => {
                  const t = oe.getCurrentWindow().id;
                  switch (e) {
                    case "blog": {
                      const i =
                        '<iframe src="' +
                        a.value.url.replace(
                          "xmind.app/m/",
                          "xmind.app/embed/"
                        ) +
                        '" width="900px" height="540px" frameborder="0" scrolling="no"></iframe>';
                      await r.ZP.fetch(d.Fx, {
                        name: "dialog-copy-link-to-share",
                        parentId: t,
                        wait: !0,
                        query: { link: encodeURIComponent(i), type: e },
                      });
                      break;
                    }
                    case "xmind share":
                      await r.ZP.fetch(d.Fx, {
                        name: "dialog-copy-link-to-share",
                        parentId: t,
                        wait: !0,
                        query: {
                          link: encodeURIComponent(a.value.url),
                          type: e,
                        },
                      });
                      break;
                    case "xmind-share-of-cn":
                      (0, Fe.DL)(a.value.submitUrl, h);
                      break;
                    default:
                      (0, Fe.DL)(a.value[e], h);
                  }
                });
              },
              queryProcess: w,
              reset: () => {
                (o.value = !1),
                  (a.value = null),
                  (n.value = ""),
                  (l.value = !1);
              },
            };
          })({ type: e, editorId: i, sheetId: a.value.id });
        let b = null;
        const w = r.ZP.route((0, d.dm)(i), (t) =>
            g(
              t.title,
              t.description,
              t.lang,
              "CURRENT_SHEET" === t.uploadSheetTypes,
              t.isPrivate
            )
              .then((e) => {
                b &&
                  b.then(e).then(() => {
                    (0, C.Rg)().addRateMasValue(10);
                  });
              })
              .catch((t) => (je.info(`upload ${e} error:`, t.message || t), t))
          ),
          { id: y, title: T } = a.value,
          I = o.value.map((e) => e.id),
          k = n.value ? Je(n.value.viewAttributes.mapBackgroundColor) : null,
          { T: M } = (0, C.JE)(),
          E = new RegExp(`^(?:${M("Map")}) \\d+$`);
        b =
          "xmind share" === e || "xmind-share-of-cn" === e
            ? r.ZP.fetch(d.Fx, {
                name: "dialog-share-to-gallery",
                parentId: oe.getCurrentWindow().id,
                wait: !0,
                query: {
                  type: e,
                  editorId: i,
                  sheetIds: I,
                  currSheetId: y,
                  mapTitle:
                    E.test(T) && a.value.rootTopic.title
                      ? (0, re.N6)(a.value.rootTopic.title)
                      : (0, re.N6)(T),
                  fileTitle:
                    h.startsWith("new://") && o.value[0].rootTopic.title
                      ? (0, re.N6)(o.value[0].rootTopic.title)
                      : (0, re.N6)(p),
                },
              }).then(() => {
                (v.value = !0), w(), u && u();
              })
            : r.ZP.fetch(d.Fx, {
                name: "dialog-share",
                parentId: oe.getCurrentWindow().id,
                wait: !0,
                query: {
                  type: e,
                  editorId: i,
                  sheetId: y,
                  mapName: T,
                  backgroundColor: k,
                },
              }).then(() => {
                (v.value = !0), w(), u && u();
              });
      }
      const Je = (e) => {
        const { r: t, g: i, b: o } = e;
        return "#" + ((t << 16) | (i << 8) | o).toString(16);
      };
      var Ye = i(72298);
      const Ke = i(16478).Z;
      var Qe = i(6113),
        et = i.n(Qe),
        tt = i(99020),
        it = i.n(tt);
      const ot = !1,
        at = (0, Ie.ZP)("shareHandler:");
      class nt extends Error {}
      class rt extends Error {}
      async function lt() {
        const e = window.editorId,
          { getSheetViewer: t } = (0, m.nZ)(),
          {
            checkOAuth: i,
            getNoteData: o,
            saveEvernote: a,
          } = (function (e) {
            const { title: t, saveAsLocalFile: i } = (0, f.FU)(),
              { sheets: o, activeSheet: a } = (0, m.nZ)(),
              n = (0, c.iH)(),
              l = (0, c.iH)([]),
              s = (0, c.Fl)(() => (0, C.S)().preferredHiddenShareItems),
              u = () => {
                const { oauthToken: e, username: t, china: i } = (0, C.Ak)();
                return { oauthToken: e, username: t, china: i };
              },
              h = async () => {
                const e = await r.ZP.fetch(d.Fx, {
                    name: "evernote",
                    wait: !0,
                  }),
                  t = null == e ? void 0 : e.result;
                return (
                  !!(null == t ? void 0 : t.oauthToken) &&
                  ((0, C.Ak)().updateEvernote({
                    china: t.china,
                    username: t.username,
                    oauthToken: t.oauthToken,
                  }),
                  (0, C.S)().updatePreferences({
                    preferredHiddenShareItems: s.value.filter(
                      (e) => "evernote" !== e
                    ),
                  }),
                  !0)
                );
              },
              p = (e) => l.value.find((t) => t.guid === e),
              g = (e, i, o, a) => {
                const n = et().createHash("md5").update(i).digest("hex");
                return {
                  resource: {
                    notebookGuid: p(e) || null,
                    mime: o,
                    data: new (it().Types.Data)({
                      bodyHash: n,
                      body: i,
                      size: i.length,
                    }),
                    attributes: { fileName: `${t}.${a}` },
                  },
                  bodyHash: n,
                };
              },
              v = async (e) => {
                const a = await Oe({ title: t }, async (e) => {
                    const {
                      filePath: t,
                      toEncrypt: a,
                      sheetIndexes: n,
                      inject: r,
                    } = e;
                    await i(t, {
                      toEncrypt: a,
                      sheetIndexes: null != n ? n : Ue()(o.value.length),
                      preprocessMetadata: (e) => r(e),
                    });
                  }),
                  { resource: n, bodyHash: r } = g(
                    e,
                    a,
                    "application/vnd.xmind.workbook",
                    "xmind"
                  );
                return {
                  resource: n,
                  content: `Attachment: <br /><en-media type="${n.mime}" hash="${r}" /><br /><br />`,
                };
              },
              b = async (i) => {
                const o = await r.ZP.fetch((0, d.vN)(e), {
                  sheetId: a.value.id,
                  exportImageOptions: {
                    skipFont: !1,
                    format: "PNG",
                    padding: 15,
                  },
                });
                o.buffer = _e(o.data);
                const { resource: n, bodyHash: l } = g(
                    i,
                    Buffer.from(await o.buffer.arrayBuffer()),
                    "image/png",
                    "png"
                  ),
                  c = {
                    escape: {
                      "&": "&amp;",
                      "<": "&lt;",
                      ">": "&gt;",
                      '"': "&quot;",
                      "'": "&apos;",
                    },
                  },
                  s = {
                    escape: RegExp(
                      "[" + Object.keys(c.escape).join("") + "]",
                      "g"
                    ),
                  };
                return {
                  resource: n,
                  content: `<div style="width:100%;text-align:center;"><h2>${t.replace(
                    s.escape,
                    (e) => c.escape[e]
                  )}</h2><br /><en-media type="${
                    n.mime
                  }" hash="${l}" /></div><br /><br />`,
                };
              },
              w = () => ({ content: Re(a.value.rootTopic) + "<br /><br />" });
            return {
              getAccountData: u,
              checkOAuth: async () => {
                const e = u();
                return !!(null == e ? void 0 : e.oauthToken) || (await h());
              },
              getNoteData: () =>
                new Promise(async (e, t) => {
                  try {
                    const t = u(),
                      i = new (it().Client)({
                        token: t.oauthToken,
                        sandbox: ot,
                        china: t.china,
                      });
                    (n.value = i.getNoteStore()),
                      (l.value = await n.value.listNotebooks()),
                      e(l.value.map((e) => ({ guid: e.guid, name: e.name })));
                  } catch (e) {
                    9 === e.errorCode &&
                      t(new nt("Authentication expired. Please reauthorize.")),
                      t(e);
                  }
                }),
              getNotebook: p,
              createResource: g,
              getFile: v,
              getPreview: b,
              getText: w,
              saveEvernote: async ({
                notebookGuid: e,
                selectedFile: i,
                selectedImage: o,
                selectedPlain: a,
              }) => {
                const r = Object.assign(new (it().Types.Note)(), {
                  title: t,
                  notebookGuid: e,
                  content: [
                    '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE en-note SYSTEM "http://xml.evernote.com/pub/enml2.dtd"><en-note>',
                  ],
                  resources: [],
                });
                if (i) {
                  const { resource: t, content: i } = await v(e);
                  r.content.push(i), r.resources.push(t);
                }
                if (o) {
                  const { resource: t, content: i } = await b(e);
                  r.content.push(i), r.resources.push(t);
                }
                if (a) {
                  const { content: e } = w();
                  r.content.push(e);
                }
                return (
                  r.content.push(
                    '<br /><br /><div style="width:100%;text-align:right;color:rgb(153,153,153)">' +
                      new Date().toDateString() +
                      ". Created by Xmind</div><br /></en-note>"
                  ),
                  (r.content = r.content.map((e) => e.trim()).join("")),
                  await n.value.createNote(r)
                );
              },
            };
          })(e),
          { clearEvernote: n } = (0, C.Ak)(),
          l = async () => {
            try {
              return (await i())
                ? { bookList: await o() }
                : Promise.resolve(null);
            } catch (e) {
              if (e instanceof nt) return n(), await l();
              throw (at.info("get evernote book list error", e), e);
            }
          },
          s = await l();
        if (!s) return;
        const { bookList: u } = s;
        if (!Array.isArray(u) || !u.length)
          throw (
            (at.info("got none evernote book list", u),
            new Error("Got none evernote book list"))
          );
        const h = r.ZP.route(
            (0, d.vN)(window.editorId),
            async ({ sheetId: e, exportImageOptions: i }) => {
              const { format: o, padding: a } = i,
                n = t(e);
              if ("SVG" === o) {
                const e = await n.exportSVGElement({
                  padding: a ? m.viewerKit.insetsOf(a) : null,
                });
                return {
                  data: e.outerHTML,
                  width: e.getAttribute("width"),
                  height: e.getAttribute("height"),
                };
              }
              if ("PNG" === o) {
                return {
                  data: await n.exportRasterImage("png", {
                    padding: a ? m.viewerKit.insetsOf(a) : null,
                    opaqueBackground: !0,
                  }),
                };
              }
            }
          ),
          p = r.ZP.route((0, d.wZ)(e), async (e) =>
            a(e)
              .then(() => {
                (0, C.Rg)().addRateMasValue(10);
              })
              .catch((e) => {
                let t = e;
                throw (
                  ((null == e ? void 0 : e.parameter) &&
                    ((t = new rt("Upload evernote error")),
                    (t.data = e.parameter),
                    (t.code = e.errorCode)),
                  t)
                );
              })
          );
        r.ZP.fetch(d.Fx, {
          name: "dialog-evernote",
          parentId: oe.getCurrentWindow().id,
          wait: !0,
          query: { bookList: JSON.stringify(u), editorId: e },
        })
          .then(() => {
            p && p(), h && h();
          })
          .catch(() => {
            h && h();
          });
      }
      const dt = (0, Ie.ZP)("shareHandler:"),
        ct = {
          CLIENT_ID: "K9FIvBKyOCYhS1Q1i6ov2YuC5FZ7iXOVzTdBS7GD",
          CLIENT_SECRET: "Uoe5YUPf14wkes5Gy5HIwTygMxPGe7hrztVMuIGU",
        },
        st = "https://api.biggerplate.com/maps",
        ut = "https://accounts.biggerplate.com/oauth/token";
      async function ht() {
        const e = window.editorId,
          { activeSheetId: t, activeSheetFigure: i } = (0, m.nZ)(),
          { title: o } = (0, f.FU)(),
          { checkOAuth: a, upload: n } = (function () {
            const { updateBiggerplate: e } = (0, C.vF)(),
              { T: t } = (0, C.JE)(),
              { saveAsLocalFile: i } = (0, f.FU)(),
              { sheets: o } = (0, m.nZ)(),
              a = (t) =>
                new Promise((i, o) => {
                  t
                    ? fetch(ut, {
                        headers: {
                          "Content-Type":
                            "application/x-www-form-urlencoded; charset=utf-8",
                        },
                        method: "POST",
                        body: new URLSearchParams({
                          client_id: ct.CLIENT_ID,
                          client_secret: ct.CLIENT_SECRET,
                          refreshToken: t,
                          grant_type: "refresh_token",
                        }),
                      }).then(async (t) => {
                        if (!t || !t.ok) return void o();
                        const a = await t.json();
                        a.access_token
                          ? (e({
                              accessToken: a.access_token,
                              realExpireTime:
                                Date.now() + 1e3 * (a.expires_in - 100),
                              refreshToken: a.refresh_token,
                            }),
                            i())
                          : o("OAuth failed");
                      })
                    : o();
                });
            return {
              checkOAuth: () =>
                new Promise((e, t) => {
                  const {
                    accessToken: i,
                    realExpireTime: o,
                    refreshToken: n,
                  } = (0, C.vF)();
                  if (!(i && o > Date.now()))
                    return a(n).catch(() => {
                      r.ZP.fetch(d.Fx, { name: "biggerplate", wait: !0 }).then(
                        () => {
                          const { accessToken: i, realExpireTime: o } = (0,
                          C.vF)();
                          i && o > Date.now() ? e() : t();
                        }
                      );
                    });
                  e();
                }),
              refreshTokenAsync: a,
              upload: async (e, a) => {
                const n = await Oe({ title: e }, async (e) => {
                    const {
                      filePath: t,
                      toEncrypt: a,
                      sheetIndexes: n,
                      inject: r,
                    } = e;
                    i(t, {
                      toEncrypt: a,
                      sheetIndexes: null != n ? n : Ue()(o.value.length),
                      preprocessMetadata: (e) => r(e),
                    });
                  }),
                  r = new ArrayBuffer(n.length),
                  l = new Uint8Array(r);
                for (let e = 0; e < n.length; e++) l[e] = n[e];
                const d = new File([r], `${e}.xmind`, {
                    type: "application/vnd.xmind.workbook",
                  }),
                  c = new FormData(),
                  s = {
                    title: [e],
                    description: [a || e],
                    map: [d, `${e}.xmind`],
                  };
                for (const [e, t] of Object.entries(s)) c.set(e, ...t);
                const u = await fetch(st, {
                  headers: {
                    "Transfer-Encoding": "chunked",
                    Authorization: this.$store.state.biggerplate.accessToken,
                  },
                  method: "POST",
                  body: c,
                });
                if (!u || !u.ok || 200 !== u.status)
                  return Promise.reject(u && u.statusText);
                {
                  const e = await u.json(),
                    { url: i } = e;
                  i && (0, Fe.DL)(i, t);
                }
              },
            };
          })();
        await a();
        const l = i.value
            ? Je(i.value.viewAttributes.mapBackgroundColor)
            : null,
          c = r.ZP.route((0, d.dm)(e), ({ title: e, description: t }) =>
            n(e, t)
              .catch((e) => (dt.info("upload biggerplate error", e), e))
              .then(() => {
                (0, C.Rg)().addRateMasValue(10);
              })
          );
        r.ZP.fetch(d.Fx, {
          name: "dialog-share",
          parentId: oe.getCurrentWindow().id,
          wait: !0,
          query: {
            type: "biggerplate",
            editorId: e,
            sheetId: t,
            mapName: o,
            backgroundColor: l,
          },
        }).then(() => {
          c();
        });
      }
      const pt = () => {
        const {
            activeSheet: e,
            activeSheetViewerState: t,
            document: o,
            executeMutationAction: a,
          } = (0, m.nZ)(),
          n = (e = ee.It.TOPIC) => {
            const { updateSearchPanel: t } = (0, p.$)();
            t({
              visible:
                !(
                  !(0, p.$)().isSearchPanelVisible ||
                  (0, p.$)().searchPanelTab === e
                ) || !(0, p.$)().isSearchPanelVisible,
              tab: e,
            });
          },
          l = (e, t, i = { popover: "" }) => {
            const { updateRightBarPanel: o } = (0, p.$)(),
              a = (0, p.$)().isRightbarVisible;
            if ((e || t || o({ visible: !a }), e && t)) {
              const n = (0, p.$)().rightBarPanel;
              o({
                visible: !(
                  a &&
                  n === e &&
                  (0, p.$)().rightPanelWin === ee.ML.DEFAULT &&
                  (0, p.$)().rightPanelTab[n] === t &&
                  (0, p.$)().rightPanelTabConfig.popover === i.popover
                ),
                win: ee.ML.DEFAULT,
                panel: e,
                tab: t,
                tabConfig: i,
              });
            }
          },
          c = (e) => {
            const {
              zenMode: t,
              editorMode: i,
              isIconPanelVisible: o,
              iconPanelTab: a,
              updateIconPanel: n,
            } = (0, p.$)();
            (t || i === s.Pq) && l(ee.QN.IMAGE, e),
              i === s.hO && n({ tab: e, visible: !(o && a === e) });
          },
          u = () => {
            (0, p.$)().setEditorMode(s.hO);
          },
          b = async () => {
            (0, h.E)().updateSheetRendering({
              sheetRendering: !0,
              sheetRenderingStartAt: new Date().getTime(),
            }),
              await (0, v._v)(100),
              (0, p.$)().setEditorMode(s.Pq);
          },
          w = (e) => {
            (0, p.$)().setPopoverEditorVisible(e);
          },
          y = {
            "editor.addLocalImage": () =>
              (async function () {
                const { createXapUrl: e, executeMutationAction: t } = (0,
                  m.nZ)(),
                  { T: i } = (0, C.JE)(),
                  { filePaths: o, canceled: a } =
                    await oe.dialog.showOpenDialog((0, oe.getCurrentWindow)(), {
                      buttonLabel: i("Insert"),
                      filters: [
                        {
                          name: "All",
                          extensions: [
                            "png",
                            "apng",
                            "jpg",
                            "jpeg",
                            "jpe",
                            "jif",
                            "jfif",
                            "jfi",
                            "tif",
                            "webp",
                            "gif",
                            "svg",
                            "xbm",
                            "xbm",
                            "dib",
                            "ico",
                            "avif",
                            "bmp",
                          ],
                        },
                        { name: "PNG", extensions: ["png", "apng"] },
                        {
                          name: "JPG",
                          extensions: [
                            "jpg",
                            "jpeg",
                            "jpe",
                            "jif",
                            "jfif",
                            "jfi",
                          ],
                        },
                        { name: "WebP", extensions: ["webp"] },
                        { name: "GIF", extensions: ["gif"] },
                        { name: "SVG", extensions: ["svg"] },
                        { name: "XBM", extensions: ["xbm"] },
                        { name: "BMP", extensions: ["xbm", "dib", "bmp"] },
                        { name: "ICO", extensions: ["ico"] },
                        { name: "AVIF", extensions: ["avif"] },
                      ],
                    });
                if (a || !o || !o.length) return;
                const n = o[0];
                ae.Z.existsSync(n) &&
                  t({
                    name: "mutate:insertImage",
                    inputValue: await e((0, re.u3)(n)),
                  });
              })(),
            "editor.showHyperlinkEditor": () => (0, te.H)(),
            "editor.showTopiclinkEditor": () =>
              ie({
                activeSheet: e.value,
                document: o.value,
                viewerState: t.value,
                executeMutationAction: a,
              }),
            "editor.addFileLink": () => le("file"),
            "editor.addFolderLink": () => le("folder"),
            "editor.addAttachmentOnNewTopic": () =>
              (async () => {
                const { T: e } = (0, C.JE)(),
                  { createXapUrlByArrayBuffer: t, executeMutationAction: i } =
                    (0, m.nZ)(),
                  { filePaths: o, canceled: a } =
                    await oe.dialog.showOpenDialog((0, oe.getCurrentWindow)(), {
                      buttonLabel: e("Insert"),
                    });
                if (a || !o || !o.length) return;
                const n = o[0];
                if (ae.Z.existsSync(n)) {
                  if (ae.Z.statSync(n).isDirectory())
                    return void (0, de.N0)({
                      type: "warning",
                      title: "Xmind",
                      detail: e("Folder is not supported."),
                      message: e("Insert Attachment Failed"),
                      buttons: [e("OK")],
                      defaultId: 0,
                      cancelId: 0,
                      noLink: !0,
                    });
                  const o = await ae.Z.readFile(n),
                    a = se().basename(n),
                    r = se().extname(n);
                  i({
                    name: "mutate:insertAttachment",
                    payload: [
                      {
                        fileName: a,
                        resourcePath: (await t(o, r)).substring(4),
                      },
                    ],
                  });
                }
              })(),
          };
        return {
          ...{
            "workbench.toggleFindAndReplace": () => n(),
            "workbench.toggleTopicNavigationPanel": () => n(ee.It.TOPIC),
            "workbench.toggleNoteNavigationPanel": () => n(ee.It.NOTE),
            "workbench.toggleLabelAndMarkerNavigationPanel": () => n(ee.It.TAG),
            "workbench.showNoteNavigationPanelAndSelect": (e) =>
              Pe(ee.qz.NOTE, { topicId: e }),
            "workbench.showLabelNavigationPanelAndSelect": (e) =>
              Pe(ee.qz.LABEL, { selectedLabel: e }),
            "workbench.showMarkerNavigationPanelAndSelect": (e) =>
              Pe(ee.qz.MARKER, { markerId: e }),
            "workbench.showTaskNavigationPanelAndSelect": (e) => {
              (0, Q.kI)(
                "done" === e.status
                  ? "highlightCheckedTask"
                  : "highlightUncheckedTask"
              ),
                Pe(ee.qz.TASK, { taskInfo: e });
            },
            "workbench.highlightCurrentLabel": (e) =>
              Ae(ee.qz.LABEL, { selectedLabel: e }),
            "workbench.highlightCurrentMarker": (e) =>
              Ae(ee.qz.MARKER, { markerId: e }),
            "workbench.highlightCurrentTask": (e) =>
              Ae(ee.qz.TASK, { taskInfo: e }),
          },
          ...{
            "workbench.toggleRightPanel": () => l(),
            "workbench.toggleTopicPanel": () => l(ee.QN.FORMAT, ee.zZ.TOPIC),
            "workbench.toggleSlidePanel": () => l(ee.QN.FORMAT, ee.zZ.SLIDE),
            "workbench.toggleMapPanel": () => l(ee.QN.THEME, ee.x9.MAP),
            "workbench.toggleSkeletonPanel": () =>
              l(ee.QN.THEME, ee.x9.MAP, { popover: "skeleton" }),
            "workbench.toggleColorThemePanel": () =>
              l(ee.QN.THEME, ee.x9.MAP, { popover: "color-theme" }),
            themeEditor: (e) => {
              (0, C.JX)().handleCommand("doThemeEditor", e);
            },
          },
          ...{
            "workbench.toggleMarkerPanel": () => c(ee.ll.MARKER),
            "workbench.toggleStickerPanel": () => c(ee.ll.STICKER),
            "workbench.toggleIllustrationPanel": () => c(ee.ll.ILLUSTRATION),
          },
          ...{
            "workbench.toggleZenMode": () =>
              (() => {
                const {
                    updateSearchPanel: e,
                    updateSearchPanelHighlightItem: t,
                  } = (0, p.$)(),
                  { executeEditorAction: i } = (0, m.nZ)();
                e({ visible: !1, tab: ee.It.TOPIC }),
                  t({}),
                  i({ name: "mutateEditor:setHighlightLabels", payload: [] }),
                  i({ name: "mutateEditor:setHighlightMarkers", payload: [] }),
                  i({ name: "mutateEditor:setHighlightTasks", payload: [] }),
                  (0, p.$)().zenMode
                    ? r.ZP.fetch(d.oH, { editorId: window.editorId }).then(
                        () => {
                          setTimeout(() => {
                            !window.document.fullscreenElement &&
                              (0, p.$)().zenMode &&
                              ((0, g.r)().setIsFullScreen(!1),
                              (0, g.r)().setIsZenMode(!1));
                          }, 400);
                        }
                      )
                    : (0, C.JX)().handleCommand("workbench.showZenMode");
              })(),
            "workbench.showZenMode": () => {
              r.ZP.fetch(d.O0, {
                editorId: window.editorId,
                targetId: "zen-mode-container",
              }).then(() => {
                setTimeout(() => {
                  window.document.fullscreenElement &&
                    !(0, p.$)().zenMode &&
                    ((0, g.r)().setIsFullScreen(!0),
                    (0, g.r)().setIsZenMode(!0));
                }, 400);
              });
            },
          },
          ...{
            "workbench.mapMode": () => u(),
            "workbench.outlineMode": () => b(),
            "workbench.switchToMapOrOutliner": () => {
              (0, p.$)().isOutlinerMode ? u() : b();
            },
            "editor.toggleSheetBar": () => {
              (0, h.E)().changeSheetBarVisible(!(0, h.E)().isSheetBarVisible);
            },
            "editor.toggleTopicCountLabel": () => {
              const {
                isTopicCountLabelVisible: e,
                changeTopicCountVisible: t,
              } = (0, h.E)();
              t(!e);
            },
          },
          ...{
            "editor.showLabelEditor": () => w("label"),
            "editor.showNotesEditor": () => w("notes"),
            "editor.showTaskEditor": () => w("task"),
            "editor.showEquationEditor": () => w("equation"),
            "editor.addAudioOnNewTopic": () => {
              (0, h.E)().updateAudioBarMode({
                audioBarMode: "audio_record",
                audioAutoplay: !1,
              });
            },
            "editor.showMarkerPopup": (e) => {
              e && ((0, h.E)().updateSelectedMarkerId(e), w("markerpopup"));
            },
          },
          ...y,
          ...{
            "workbench.exportPng1": (...e) =>
              i
                .e(7306)
                .then(i.bind(i, 37306))
                .then((t) => t.exportImage("png", ...e)),
            "workbench.exportJpeg": (...e) =>
              i
                .e(7306)
                .then(i.bind(i, 37306))
                .then((t) => t.exportImage("jpeg", ...e)),
            "workbench.exportSvg1": (...e) =>
              i
                .e(7306)
                .then(i.bind(i, 37306))
                .then((t) => t.exportImage("svg", ...e)),
            "workbench.exportPdf": (...e) =>
              Promise.all([
                i.e(8592),
                i.e(6486),
                i.e(2118),
                i.e(4761),
                i.e(4559),
                i.e(8825),
                i.e(5635),
              ])
                .then(i.bind(i, 46952))
                .then((t) => t.exportPDF(e[0])),
            "workbench.exportExcel": () =>
              Promise.all([i.e(2592), i.e(4360)])
                .then(i.bind(i, 94360))
                .then((e) => e.exportExcel()),
            "workbench.exportPowerPoint": () =>
              Promise.all([i.e(6486), i.e(2118), i.e(3907), i.e(1038)])
                .then(i.bind(i, 21038))
                .then((e) => e.exportPowerPoint()),
            "workbench.exportMd": (...e) =>
              i
                .e(6434)
                .then(i.bind(i, 93118))
                .then((t) => t.exportMarkdown(e[0])),
            "workbench.exportOPML": () =>
              i
                .e(6427)
                .then(i.bind(i, 26427))
                .then((e) => e.exportOPML()),
            "workbench.exportTextBundle": () =>
              i
                .e(3999)
                .then(i.bind(i, 63999))
                .then((e) => e.exportTextBundle()),
            "workbench.exportWord": () =>
              Promise.all([i.e(4543), i.e(8595)])
                .then(i.bind(i, 48595))
                .then((e) => e.exportWord()),
            "workbench.exportBranchPng": () =>
              i
                .e(7306)
                .then(i.bind(i, 37306))
                .then((e) => e.exportBranchAsPNG()),
            "workbench.exportBranchSvg": () =>
              i
                .e(7306)
                .then(i.bind(i, 37306))
                .then((e) => e.exportBranchAsSVG()),
            "workbench.exportBranchPdf": () =>
              Promise.all([
                i.e(8592),
                i.e(6486),
                i.e(2118),
                i.e(4761),
                i.e(4559),
                i.e(8825),
                i.e(5635),
              ])
                .then(i.bind(i, 46952))
                .then((e) => e.exportBranchAsPDF()),
            "workbench.exportBranchMd": (...e) =>
              i
                .e(6434)
                .then(i.bind(i, 93118))
                .then((t) => t.exportMarkdown(e[0])),
          },
          ...{
            shareXmindLink: () => Xe("xmind share"),
            shareXmindLinkOfCN: () => {
              (0, Q.JC)("submitToGalleryClick"), Xe("xmind-share-of-cn");
            },
            shareMail: () =>
              (async function () {
                const { title: e, saveAs: t } = (0, f.FU)(),
                  i = decodeURIComponent(e + ".xmind"),
                  o = oe.app.getPath("temp"),
                  a = se().join(o, i);
                await t((0, re.u3)(a));
                const n = ae.Z.readFileSync(a),
                  l = new Ke().createChild(!1, { filename: i }).setContent(n),
                  c = new Ke("multipart/form-data");
                c.setHeader({
                  From: "",
                  To: "",
                  Subject: "",
                  "MIME-Version": "1.0",
                  "X-Unsent": 1,
                  "X-Priority": 3,
                  "X-Has-Attach": "yes",
                  "X-Mozilla-Draft-Info":
                    "internal/draft; vcard=0; receipt=0; DSN=0; uuencode=0",
                }),
                  c.appendChild(l);
                const s = se().join(o, "XMind.eml");
                ae.Z.writeFileSync(s, c.build()),
                  Ye.shell.openExternal((0, re.u3)(s)).catch((e) => {
                    r.ZP.fetch(d.Fx, {
                      name: "dialog-problem",
                      payload: {
                        name: "OpenError",
                        message: e.message || e,
                        stack: e.stack,
                        code: "OPEN_EMAIL",
                      },
                    });
                  });
              })(),
            shareBlog: () => Xe("blog"),
            shareBiggerPlate: () => ht(),
            shareEvernote: () => lt(),
            sharePinterest: () => Xe("pinterest"),
            shareTwitter: () => Xe("twitter"),
            shareFacebook: () => Xe("facebook"),
          },
          ...{ printBranch: ue.Ln, print: ue.S0 },
          ...{
            showMapShot: pe,
            mapShot: me,
            mergeXMindFiles: fe,
            createTheme: ye,
            customizeTheme: Te,
          },
          ...{
            "editor.toggleBeginnerMode": () =>
              (0, h.E)().changeBeginnerModeVisible(!0),
            "editor.toggleBeginnerModeTips": () =>
              (0, h.E)().changeTooltipsVisible(!(0, h.E)().isTooltipsVisible),
            "workbench.setpassword": Me,
            "editor.rotateImageLeft": xe,
          },
          ...{
            "editor.enterPitchMode": () =>
              Promise.all([i.e(6486), i.e(2118), i.e(705)])
                .then(i.bind(i, 80705))
                .then((e) => e.enterPitchMode({ isPresenterView: !1 })),
            "editor.enterPitchModeWindowed": () =>
              Promise.all([i.e(6486), i.e(2118), i.e(705)])
                .then(i.bind(i, 80705))
                .then((e) => e.startWindowedPitch()),
            "editor.enterPitchPresenterViewMode": () =>
              Promise.all([i.e(6486), i.e(2118), i.e(705)])
                .then(i.bind(i, 80705))
                .then((e) => e.enterPitchMode({ isPresenterView: !0 })),
          },
        };
      };
      function mt() {
        const { properties: e } = (0, m.nZ)();
        if (e.value.webLink.value) (0, te.H)();
        else if (e.value.notes.value) {
          (0, p.$)().setPopoverEditorVisible("notes");
        } else;
      }
      var gt = i(81296),
        Ct = i.n(gt);
      function vt(e) {
        return e.split("/").slice(-1).pop();
      }
      async function bt(e) {
        let t = "";
        try {
          t = (0, C._I)().lastSaveDirectory || oe.app.getPath("downloads");
        } catch (e) {
          t = "downloads";
        }
        const i = await (0, de.ZZ)({
          title: "Save",
          suggestPath: { suggestedName: e, defaultPath: t },
        });
        return new Promise(function (e) {
          if (i) {
            const t = se().dirname(i);
            r.ZP.fetch(d.Pp, {
              mutations: [
                {
                  id: "attachment",
                  type: "setLastDirectory",
                  payload: [{ lastSaveDirectory: t }],
                },
              ],
            }),
              e(i);
          }
        });
      }
      async function ft() {
        const { properties: e } = (0, m.nZ)(),
          t = e.value.audioNotes.value.resourcePath,
          i = vt(t),
          { stage: o } = (0, f.FU)(),
          a = Buffer.from(await o.take(t));
        bt(i).then(function (e) {
          Ct().writeFileSync(e, a);
        });
      }
      async function wt() {
        const { properties: e } = (0, m.nZ)(),
          t = e.value.attachmentFile.value.resourcePath;
        let i = e.value.attachmentFile.value.fileName;
        const o = se().extname(t);
        i && !i.endsWith(o) && (i += o);
        const { stage: a } = (0, f.FU)(),
          n = Buffer.from(await a.take(t));
        bt(i).then(function (e) {
          Ct().writeFileSync(e, n);
        });
      }
      async function yt() {
        const { activeSheet: e, selection: t } = (0, m.nZ)(),
          i = t.value.modelIds[0],
          o = e.value.query({ id: i }).asTopic().imageSource,
          a = vt(o),
          { stage: n } = (0, f.FU)(),
          r = Buffer.from(await n.take(o.replace("xap:", "")));
        bt(a).then(function (e) {
          Ct().writeFileSync(e, r);
        });
      }
      async function Tt() {
        const { activeSheet: e, selection: t } = (0, m.nZ)(),
          i = t.value.modelIds[0],
          o = e.value.query({ id: i }).asTopic().imageSource,
          a = (0, (0, C.JE)().T)("Equation") + ".png",
          { stage: n } = (0, f.FU)(),
          r = Buffer.from(await n.take(o.replace("xap:", "")));
        bt(a).then(function (e) {
          Ct().writeFileSync(e, r);
        });
      }
      function It() {
        const { executePropertyAction: e } = (0, m.nZ)();
        e({ name: "mutateProperty:marker", inputValue: null });
      }
      function kt() {
        const { executePropertyAction: e } = (0, m.nZ)();
        e({ name: "mutateProperty:topicLabel", payload: { labels: [] } });
      }
      function Mt() {
        const { executeMutationAction: e } = (0, m.nZ)();
        e({ name: "mutate:removeTopicHref" });
      }
      const Et = () => {
          const { executePropertyAction: e } = (0, m.nZ)();
          e({ name: "mutateProperty:notes", inputValue: null });
        },
        xt = () => {
          !(function () {
            const { executeMutationAction: e } = (0, m.nZ)();
            e({ name: "mutate:deleteTopicImage" });
          })(),
            (function () {
              const { executePropertyAction: e } = (0, m.nZ)();
              e({ name: "mutateProperty:equation" });
            })();
        };
      const St = () => {
          const { sheets: e } = (0, m.nZ)(),
            t = Vt();
          if (t > -1) {
            let i = t - 1;
            (i = i < 0 ? i + e.value.length : i), Lt(i);
          }
        },
        Ht = () => {
          const { sheets: e } = (0, m.nZ)(),
            t = Vt();
          if (t > -1) {
            const i = (t + 1) % e.value.length;
            Lt(i);
          }
        },
        Lt = (e) => {
          const { executeEditorAction: t, sheets: i } = (0, m.nZ)(),
            o = i.value[e];
          if (!o) return;
          t({ name: "mutateEditor:switchSheet", inputValue: o.id });
        },
        Vt = () => {
          const { activeSheetId: e, sheets: t } = (0, m.nZ)(),
            i = t.value.map((e) => e.id);
          if (!i || i.length < 2) return;
          return i.indexOf(e.value);
        };
      var Pt = i(50743),
        At = i(67214);
      async function Ft(e) {
        var t, i;
        const {
            document: o,
            activeSheetFigure: a,
            getResourceUrlByXapUrl: n,
          } = (0, m.nZ)(),
          r =
            null === (t = o.value.query({ id: e })) || void 0 === t
              ? void 0
              : t.asTopic();
        if (!r || !a.value) return;
        const l = a.value.topicFigureByTopicId[e];
        if (null == l ? void 0 : l.viewAttributes.hasImageLoadingFailed) return;
        const d = o.value.query({ id: r.id }).asTopic().imageSource,
          c = await n(d),
          s = await (0, At.N8)(c);
        (null === (i = (0, C.km)().imageViewerContext) || void 0 === i
          ? void 0
          : i.imageUrl) !== c &&
          (0, C.JX)().handleCommand("imageViewer", {
            imageUrl: c,
            imageSize: s,
            title: r.title || "",
            winId: (0, oe.getCurrentWindow)().id,
          });
      }
      const Zt = () => {
        const e = {};
        Object.keys(P).forEach((t) => {
          e[t] = Ot(t);
        }),
          (e["editor.toggleBranchOnly"] = () => {
            const { isInBranchOnly: e } = (0, m.nZ)();
            e.value
              ? (0, C.JX)().handleCommand("editor.exitBranchOnly")
              : (0, C.JX)().handleCommand("editor.showBranchOnly");
          }),
          (e["editor.toggleBranch"] = () => {
            const { actionStates: e, executeMutationAction: t } = (0, m.nZ)();
            t({
              name: A("editor.foldBranch", e.value)
                ? "mutate:foldBranch"
                : "mutate:unfoldBranch",
            });
          }),
          (e["editor.toggleAllBranch"] = () => {
            const { actionStates: e, executeMutationAction: t } = (0, m.nZ)();
            t({
              name: A("editor.foldAllDescendantBranches", e.value)
                ? "mutate:foldAllDescendantBranches"
                : "mutate:unfoldAllDescendantBranches",
            });
          }),
          (e["editor.editInfoItem"] = mt),
          (e["editor.saveAsAudioNote"] = ft),
          (e["editor.saveAsAttachment"] = wt),
          (e["editor.saveAsImage"] = yt),
          (e["editor.saveAsEquation"] = Tt),
          (e["editor.toggleShowGuideline"] = () => {
            const {
              shouldShowGuidelineForMovingTopics: e,
              updatePreferences: t,
            } = (0, C.S)();
            t({ shouldShowGuidelineForMovingTopics: !e });
          }),
          (e["editor.cancelTask"] = () => {
            const { executeMutationAction: e } = (0, m.nZ)();
            e({ name: "mutate:cancelTask" });
          }),
          (e["editor.showEditBox"] = async () => {
            var e, t;
            const {
              executeMutationAction: i,
              selection: o,
              actionStates: a,
            } = (0, m.nZ)();
            if (
              "image" ===
              (null === (e = null == o ? void 0 : o.value) || void 0 === e
                ? void 0
                : e.type)
            )
              return void (
                1 === o.value.modelIds.length && Ft(o.value.modelIds[0])
              );
            (null === (t = a.value["mutate:startEditingTopic"]) || void 0 === t
              ? void 0
              : t.disabled) || i({ name: "mutate:startEditingTopic" });
          }),
          (e["editor.previewImage"] = ({ topicId: e }) => {
            Ft(e);
          }),
          (e["editor.showEquationEditor"] = () => {
            (0, p.$)().setPopoverEditorVisible("equation");
          }),
          (e["editor.resizeEquation"] = () => {
            const { executeMutationAction: e } = (0, m.nZ)();
            e({ name: "mutate:resetTopicImageSize" });
          }),
          (e["editor.removeMarker"] = It),
          (e["editor.removeLabel"] = kt),
          (e["editor.removeLink"] = Mt),
          (e["editor.removeNote"] = Et),
          (e["editor.toggleTopicNotesDisplay"] = (e = "icon") => {
            const { executePropertyAction: t } = (0, m.nZ)();
            t({ name: "mutateProperty:topicNotesDisplay", inputValue: e });
          }),
          (e["editor.removeStickerOrImageOrEquation"] = xt),
          (e["editor.removeTopicContent"] = () => {}),
          (e["editor.removeMarkerForTopicContextMenu"] = It),
          (e["editor.removeLabelForTopicContextMenu"] = kt),
          (e["editor.removeTodoForTopicContextMenu"] = () => {
            const { executeMutationAction: e } = (0, m.nZ)();
            e({ name: "mutate:removeTodo" });
          }),
          (e["editor.removeLinkForTopicContextMenu"] = Mt),
          (e["editor.previousSheet"] = St),
          (e["editor.nextSheet"] = Ht);
        [
          { id: "editor.addMarkerOne", payload: { priority: 1 } },
          { id: "editor.addMarkerTwo", payload: { priority: 2 } },
          { id: "editor.addMarkerThree", payload: { priority: 3 } },
          { id: "editor.addMarkerFour", payload: { priority: 4 } },
          { id: "editor.addMarkerFive", payload: { priority: 5 } },
          { id: "editor.addMarkerSix", payload: { priority: 6 } },
          { id: "editor.addMarkerSeven", payload: { priority: 7 } },
        ].forEach((t) => {
          e[t.id] = () => {
            const { markerGroups: e, addMarker: i } = (0, Pt.HV)(),
              o = e.value.find((e) => "priorityMarkers" === e.id),
              a = ((null == o ? void 0 : o.markers) || [])[
                t.payload.priority - 1
              ];
            o && a && i(a, o);
          };
        });
        const t = async (e) => {
          const { executeAction: t } = (0, m.nZ)();
          let i = [
            { name: "mutateProperty:topicNumberingPattern", inputValue: e },
          ];
          "none" === e &&
            (i = i.concat([
              {
                name: "mutateProperty:topicNumberingTieredEnabled",
                inputValue: !1,
              },
              {
                name: "mutateProperty:topicNumberingStartsHereEnabled",
                inputValue: !1,
              },
            ])),
            t({ name: "mutatePropertyBatch", payload: i });
        };
        return (
          (e["editor.changeNumberingPatternToNone"] = () => t("none")),
          (e["editor.changeNumberingPatternToNumeralArabic"] = () =>
            t("numeral-arabic")),
          (e["editor.changeNumberingPatternToAlphabetUppercase"] = () =>
            t("alphabet-uppercase")),
          (e["editor.changeNumberingPatternToAlphabetLowercase"] = () =>
            t("alphabet-lowercase")),
          (e["editor.changeNumberingPatternToNumeralRoman"] = () =>
            t("numeral-roman")),
          (e["editor.toggleNumberingTieredEnabled"] = async () => {
            var e, t;
            const { styles: i, executeStyleAction: o } = (0, m.nZ)();
            o({
              name: "mutateProperty:topicNumberingTieredEnabled",
              inputValue: !(null ===
                (t =
                  null === (e = i.value) || void 0 === e
                    ? void 0
                    : e.topicNumberingTieredEnabled) || void 0 === t
                ? void 0
                : t.value),
            });
          }),
          (e["editor.toggleNumberingStartsHereEnabled"] = async () => {
            var e, t;
            const { styles: i, executeStyleAction: o } = (0, m.nZ)();
            o({
              name: "mutateProperty:topicNumberingStartsHereEnabled",
              inputValue: !(null ===
                (t =
                  null === (e = i.value) || void 0 === e
                    ? void 0
                    : e.topicNumberingStartsHereEnabled) || void 0 === t
                ? void 0
                : t.value),
            });
          }),
          e
        );
      };
      function Ot(e) {
        var t;
        const {
            executeMutationAction: i,
            executeAction: o,
            executeEditorAction: a,
          } = (0, m.nZ)(),
          n = null === (t = P[e]) || void 0 === t ? void 0 : t.actionId;
        return (function (e) {
          return e.startsWith("mutate:");
        })(n)
          ? (e) =>
              i({
                name: n,
                inputValue: null == e ? void 0 : e.value,
                payload: null == e ? void 0 : e.payload,
              })
          : (function (e) {
              return e.startsWith("mutateEditor:");
            })(n)
          ? (e) =>
              a({
                name: n,
                inputValue: null == e ? void 0 : e.value,
                payload: null == e ? void 0 : e.payload,
              })
          : (e) =>
              o({
                name: n,
                inputValue: null == e ? void 0 : e.value,
                payload: null == e ? void 0 : e.payload,
              });
      }
      function Bt() {
        const e = (0, g.r)();
        if (!e) return;
        const t = e.activeEditorId,
          i = e.editorViewInfos.findIndex((e) => e.id === t),
          o = e.editorViewInfos.length,
          a = (i - 1 + o) % o;
        r.ZP.fetch(d.Dg, {
          editorId: e.editorViewInfos[a].id,
          frameId: e.frameId,
        });
      }
      function Rt() {
        const e = (0, g.r)();
        if (!e) return;
        const t = e.activeEditorId,
          i =
            (e.editorViewInfos.findIndex((e) => e.id === t) + 1) %
            e.editorViewInfos.length;
        r.ZP.fetch(d.Dg, {
          editorId: e.editorViewInfos[i].id,
          frameId: e.frameId,
        });
      }
      const $t = () => {
        const e = Zt(),
          t = (e) => {
            const { styles: t } = (0, m.nZ)();
            return (0, c.Fl)(() => {
              var i, o;
              return null ===
                (o = null === (i = t.value) || void 0 === i ? void 0 : i[e]) ||
                void 0 === o
                ? void 0
                : o.value;
            });
          },
          i = (e) => {
            const { executeStyleAction: t } = (0, m.nZ)();
            return (i) => {
              t({ name: `mutateProperty:${e}`, inputValue: i });
            };
          },
          o = (e) => () => {
            const o = t(e);
            if ("boolean" != typeof o.value) return;
            i(e)(!o.value);
          },
          a = (e, o, a) => () => {
            const n = t(e);
            if (!Number.isSafeInteger(n.value)) return;
            i(e)(o > 0 ? Math.min(n.value + o, a) : Math.max(n.value + o, a));
          };
        return {
          escape: e["editor.hideEditBox"],
          cut: () => {
            (0, e.cut)({ payload: { toImage: !0, toMarker: !0 } });
          },
          copy: e.copy,
          paste: () => {
            (0, e.paste)({ payload: { toImage: !0, toMarker: !0 } });
          },
          insertText: (e) => {
            var t;
            const { activeSheetViewer: i } = (0, m.nZ)();
            null === (t = i.value) ||
              void 0 === t ||
              t.textInputManager.insertText(e);
          },
          "editor.addMarker": ({ value: e }) =>
            (({ value: e }) => {
              const { executeAction: t } = (0, m.nZ)();
              t({
                name: "mutateBatchDirect",
                payload: [{ name: "mutate:addMarker", inputValue: e }],
              });
            })({ value: e }),
          "editor.changeImage": ({ value: e }) =>
            (({ value: e }) => {
              const { executeAction: t } = (0, m.nZ)();
              t({
                name: "mutateBatchDirect",
                payload: [{ name: "mutate:insertImage", inputValue: e }],
              });
            })({ value: e }),
          "editor.strikethroughText": o("textDecorationLineThrough"),
          "editor.boldText": o("textFontBold"),
          "editor.italicText": o("textFontItalic"),
          "editor.increaseFontSize": a("textFontSize", 2, 60),
          "editor.decreaseFontSize": a("textFontSize", -2, 8),
        };
      };
      var Nt = i(32652);
      const Wt = (e) => (
        !(0, h.E)().isBeginnerModeVisible ||
          (0, p.$)().zenMode ||
          ((0, Nt.X)().actionMode &&
            (0, Nt.X)().currentKey === e &&
            (0, Nt.X)().next()),
        !1
      );
      function Dt() {
        const e = (0, C.f7)().keybindingByCommandId("editor.addSubTopic");
        Wt(e), Ot("editor.addSubTopic")();
      }
      function Ut() {
        const e = (0, C.f7)().keybindingByCommandId("editor.addTopic");
        Wt(e), Ot("editor.addTopic")();
      }
      function qt() {
        const e = (0, C.f7)().keybindingByCommandId("editor.showEditBox");
        Wt(e), Ot("editor.showEditBox")();
      }
      function zt() {
        (0, h.E)().changeBeginnerModeVisible(!1);
      }
      const Gt = () => {
        const e = pt(),
          t = Zt();
        return {
          showMapShot: e.showMapShot,
          mapShot: e.mapShot,
          "editor.zoomIn": t["editor.zoomIn"],
          "editor.zoomOut": t["editor.zoomOut"],
          "editor.resetZoom": t["editor.resetZoom"],
          "editor.fitMap": t["editor.fitMap"],
        };
      };
      var _t = i(68769),
        jt = i(62004);
      const Xt = (0, Ie.ZP)("collaboration"),
        Jt = async () => {
          const e = (0, f.FU)();
          let t = e.title;
          e.source.startsWith("new://") &&
            (t = (0, m.nZ)().activeSheet.value.rootTopic.title);
          const { result: i } = await r.ZP.fetch(d.Fx, {
            name: "dialog-upload-local-file",
            parentId: window.id,
            wait: !0,
            query: { fileName: t },
          });
          if (i && !i.cancel && i.confirm && i.payload) {
            const t = i.payload.teamId === (0, C.c7)().user,
              { teammatePayload: o } = await r.ZP.fetch(d.rM.TEAMMATE_PAYLOAD, {
                teamId: i.payload.teamId,
              }).catch((e) => ({ teammatePayload: null })),
              a = "owner" === (null == o ? void 0 : o.role);
            if (
              !(await r.ZP.fetch(d.Gy, {
                name: "action.uploadMultipleSheet",
                payload: {
                  planType: t ? C.k9.PERSONAL : C.k9.TEAM,
                  teamId: i.payload.teamId,
                  isTeamOwner: a,
                  sheetNum: (0, m.nZ)().sheets.value.length,
                },
              }))
            )
              return;
            if (e.password) {
              const { result: t } = await r.ZP.fetch(d.Fx, {
                name: "dialog-confirm",
                parentId: window.id,
                wait: !0,
                query: { type: "encrypted-file", password: e.password },
              });
              if (!t || t.cancel) return;
              t.confirm &&
                (e.changePassword({ password: null, passwordHint: null }),
                e.changeDirty(!0));
            }
            e.isDirty && e.source.startsWith("file://")
              ? await e.save()
              : e.changeDirty(!1);
            try {
              const t = await e.thumbnailGenerator.generateThumbnail(
                  (0, m.nZ)().activeSheetId.value
                ),
                o = await (0, be.LW)((0, m.nZ)().document.value, e.stage, t),
                n = new Blob([o], { type: "application/xmind" }),
                l = new AbortController(),
                c = l.signal,
                u = new Promise((e, t) => {
                  (0, jt.Y)()
                    .uploadFile({
                      file: n,
                      fileName: i.payload.fileName,
                      parentFolderId: i.payload.teamId,
                      teamId: i.payload.teamId,
                      isTeamOwner: a,
                      accessMode: "private",
                      signal: c,
                    })
                    .then((i) => {
                      var o;
                      if (
                        ((0, g.A)().setUploading(!1),
                        (i && i.metadata) || t(),
                        null === (o = null == i ? void 0 : i.metadata) ||
                        void 0 === o
                          ? void 0
                          : o.fileId)
                      ) {
                        const t = `cloud://host.xmind.app/${i.metadata.fileId}`;
                        e({ source: t });
                      }
                    })
                    .catch((e) => t(e));
                }),
                h = new Promise((e) => {
                  (0, g.A)().setUploading(!0),
                    r.ZP.fetch(d.Fx, {
                      name: "dialog-progress",
                      parentId: window.id,
                      wait: !0,
                      overrideSetting: {
                        height: s.Us["dialog-progress"].height + 40,
                      },
                      query: { type: "uploading", editorId: window.editorId },
                    }).then((t) => e(t.result));
                }),
                C = await Promise.race([u, h]);
              if (
                ((C && !C.stopUploading) || l.abort(),
                null == C ? void 0 : C.source)
              ) {
                await r.ZP.fetch(d.g_, { name: "dialog-progress" });
                const e = (0, p.$)();
                e.isRightbarVisible && e.updateRightBarPanel({ visible: !1 }),
                  e.isIconPanelVisible && e.updateIconPanel({ visible: !1 }),
                  e.isSearchPanelVisible &&
                    e.updateSearchPanel({ visible: !1 });
                const t = (0, f.FU)();
                await t
                  .saveAs(C.source)
                  .then(() => {
                    (0, m.pk)().changeFile({ id: t.fileId, stage: t.stage });
                  })
                  .catch((e) => t.handleOpenError(e));
              }
            } catch (e) {
              e.code === _t.i.IMAGE_TOO_LARGE &&
                (await r.ZP.fetch(d.Fx, {
                  name: "dialog-confirm",
                  parentId: window.id,
                  wait: !0,
                  query: { type: "upload-limit-exceeded-of-image" },
                })),
                e.code === _t.i.ATTACHMENT_TOO_LARGE &&
                  (await r.ZP.fetch(d.Fx, {
                    name: "dialog-confirm",
                    parentId: window.id,
                    wait: !0,
                    query: { type: "upload-limit-exceeded-of-attachment" },
                  })),
                await r.ZP.fetch(d.g_, { name: "dialog-progress" }),
                e.code === _t.R.STORAGE_LIMIT_FAILURE
                  ? (0, J.C)().openUploadFailedStorageLimitToast()
                  : e.code === _t.R.NO_PERMISSION_FAILURE
                  ? (0, J.C)().openUploadFailedNoPermissionToast()
                  : e.code === _t.R.EXCEED_FILES_LIMIT
                  ? await r.ZP.fetch(d.Gy, {
                      name: "action.createMapOfCloud",
                      payload: JSON.parse(e.message),
                    })
                  : (0, J.C)().openUploadFailedToast(),
                Xt.error("uploadFile failed", e);
            }
          }
        },
        Yt = async () => {
          var e, t, i, o;
          const a = "cn" === (0, C.qr)().serviceRegion,
            n = (0, f.FU)(),
            l = `collaborator:${window.editorId}-${(0, v.hb)()}`,
            s = `${l}:1`,
            u = `${l}:2`;
          let h = null;
          const p = r.ZP.route(
              s,
              () => (
                h && h(),
                (h = (0, c.YP)(
                  () => (0, w.c)().onlineCollaborators,
                  (e) => {
                    try {
                      r.ZP.fetch(u, { onlineCollaborators: e });
                    } catch (e) {
                      h && h();
                    }
                  },
                  { immediate: !0 }
                )),
                { onlineCollaborators: (0, w.c)().onlineCollaborators }
              )
            ),
            { result: m } = await r.ZP.fetch(d.Fx, {
              name: "dialog-invite-collaborators",
              parentId: window.id,
              wait: !0,
              query: {
                fileId: n.fileId,
                fileName: n.title,
                teamId:
                  null === (e = (0, w.c)().cloudFileMeta) || void 0 === e
                    ? void 0
                    : e.teamId,
                fileOwner:
                  null === (t = (0, w.c)().cloudFileMeta) || void 0 === t
                    ? void 0
                    : t.fileOwner,
                isTeamOwner: (0, w.c)().isTeamOwner,
                editorId: window.editorId,
                channelPort1: s,
                channelPort2: u,
              },
            });
          h && h(),
            p(),
            (null == m ? void 0 : m.inviteSuccessByEmail) &&
              (a
                ? (0, J.C)().openSendInvitationByEmailOfCNToast()
                : (0, J.C)().openSendInvitationByEmailToast()),
            (null == m ? void 0 : m.inviteFailedByEmail) &&
              (null == m ? void 0 : m.invalidInvites) &&
              (await r.ZP.fetch(d.Fx, {
                name: "dialog-confirm",
                parentId: window.id,
                wait: !0,
                query: {
                  type: "invite-failed-by-email-of-cn",
                  invalidInvites: m.invalidInvites,
                },
              }),
              (0, J.C)().openInviteLinkCopiedToast());
          try {
            const { metadata: e } = await r.ZP.fetch(d.rM.GET_FILE_METADATA, {
              fileId: n.fileId,
            });
            (0, w.c)().changeCloudFileMeta({
              ...(0, w.c)().cloudFileMeta,
              teammateRole:
                null !== (i = e.teammateRole) && void 0 !== i ? i : "editor",
              accessMode: e.accessMode,
              accessRole:
                null !== (o = e.accessRole) && void 0 !== o ? o : "viewer",
              password: e.password,
            });
          } catch (e) {
            Xt.error("getFileMetadata failed", e);
          }
        },
        Kt = () => (0, J.C)().undo(),
        Qt = () => (0, J.C)().redo();
      async function ei() {
        const { createXapUrl: e, executeMutationAction: t } = (0, m.nZ)(),
          i = (0, C.JE)().T,
          { filePaths: o, canceled: a } = await oe.dialog.showOpenDialog(
            (0, oe.getCurrentWindow)(),
            {
              buttonLabel: i("Insert"),
              filters: [
                {
                  name: "All",
                  extensions: [
                    "png",
                    "apng",
                    "jpg",
                    "jpeg",
                    "jpe",
                    "jif",
                    "jfif",
                    "jfi",
                    "tif",
                    "webp",
                    "gif",
                    "svg",
                    "xbm",
                    "xbm",
                    "dib",
                    "ico",
                    "avif",
                    "bmp",
                  ],
                },
                { name: "PNG", extensions: ["png", "apng"] },
                {
                  name: "JPG",
                  extensions: ["jpg", "jpeg", "jpe", "jif", "jfif", "jfi"],
                },
                { name: "WebP", extensions: ["webp"] },
                { name: "GIF", extensions: ["gif"] },
                { name: "SVG", extensions: ["svg"] },
                { name: "XBM", extensions: ["xbm"] },
                { name: "BMP", extensions: ["xbm", "dib", "bmp"] },
                { name: "ICO", extensions: ["ico"] },
                { name: "AVIF", extensions: ["avif"] },
              ],
            }
          );
        if (a || !o || !o.length) return;
        const n = o[0];
        if (ae.Z.existsSync(n)) {
          if ((await ae.Z.stat(n)).size > s.i3)
            r.ZP.fetch(d.Fx, {
              name: "dialog-confirm",
              parentId: window.id,
              wait: !0,
              query: { type: "upload-limit-exceeded-of-image" },
            });
          else {
            t({
              name: "mutate:insertImage",
              inputValue: await e((0, re.u3)(n)),
            });
          }
        }
      }
      const ti = async () => {
        const { createXapUrlByArrayBuffer: e, executeMutationAction: t } = (0,
          m.nZ)(),
          i = (0, C.JE)().T,
          { filePaths: o, canceled: a } = await oe.dialog.showOpenDialog(
            (0, oe.getCurrentWindow)(),
            { buttonLabel: i("Insert") }
          );
        if (a || !o || !o.length) return;
        const n = o[0];
        if (ae.Z.existsSync(n)) {
          const o = ae.Z.statSync(n);
          if (o.isDirectory())
            return void (0, de.N0)({
              type: "warning",
              title: "Xmind",
              detail: i("Folder is not supported."),
              message: i("Insert Attachment Failed"),
              buttons: [i("OK")],
              defaultId: 0,
              cancelId: 0,
              noLink: !0,
            });
          if (o.size > s.jX)
            r.ZP.fetch(d.Fx, {
              name: "dialog-confirm",
              parentId: window.id,
              wait: !0,
              query: { type: "upload-limit-exceeded-of-attachment" },
            });
          else {
            const i = await ae.Z.readFile(n),
              o = se().basename(n),
              a = se().extname(n);
            t({
              name: "mutate:insertAttachment",
              payload: [
                { fileName: o, resourcePath: (await e(i, a)).slice(4) },
              ],
            });
          }
        }
      };
      async function ii({ topicId: e }) {
        var t, i;
        const {
            document: o,
            activeSheetFigure: a,
            getResourceUrlByXapUrl: n,
          } = (0, m.nZ)(),
          r =
            null === (t = o.value.query({ id: e })) || void 0 === t
              ? void 0
              : t.asTopic();
        if (!r || !a.value) return;
        const l = a.value.topicFigureByTopicId[e];
        if (null == l ? void 0 : l.viewAttributes.hasImageLoadingFailed) return;
        const d = o.value.query({ id: r.id }).asTopic().imageSource,
          c = await n(d, { ensureFile: !0 }),
          s = await (0, At.N8)(c);
        (null === (i = (0, C.km)().imageViewerContext) || void 0 === i
          ? void 0
          : i.imageUrl) !== c &&
          (0, C.JX)().handleCommand("imageViewer", {
            imageUrl: c,
            imageSize: s,
            title: r.title || "",
            winId: (0, oe.getCurrentWindow)().id,
          });
      }
      async function oi() {
        const { result: e } = await r.ZP.fetch(d.Fx, {
          name: "dialog-report",
          parentId: window.id,
          wait: !0,
          query: { fileId: (0, f.FU)().fileId },
        });
        "open-report-success-toast" === (null == e ? void 0 : e.action)
          ? (0, J.C)().openReportSuccessToast()
          : "open-report-repeatedly-toast" ===
              (null == e ? void 0 : e.action) &&
            (0, J.C)().openReportRepeatedlyToast();
      }
      const ai = (0, Ie.ZP)("collaboration");
      async function ni() {
        try {
          await r.ZP.fetch(d.rM.GO_VERSION_HISTORY, {
            fileId: (0, f.FU)().fileId,
          });
        } catch (e) {
          ai.error("Failed to versionHistory", e);
        }
      }
      const ri = (0, Ie.ZP)("collaboration");
      async function li(e) {
        try {
          const {
            items: [{ fileId: t }],
          } = await r.ZP.fetch(d.rM.DRIVE_DUPLICATE, {
            fileIds: [e.fileId],
            toParentFolderId: e.folderId,
            teamId: e.teamId,
            isTeamOwner: e.isTeamOwner,
          });
          await r.ZP.fetch(d.NF, {
            source: (0, K.gH)(`cloud://host.xmind.app/${t}`, {
              sourceFrom: "duplicate",
            }),
          });
        } catch (e) {
          ri.error("Failed to duplicateFile", e),
            (0, J.C)().openRequestExceptionToast();
        }
      }
      const di = () => ({
        start: () => {
          ((e) => {
            const t = (0, K.Ds)((e) => {
              const t = (0, g.A)();
              null == t || t.updateCommands(e);
            }, 50);
            (0, c.YP)(
              () => {
                var t;
                if (!(0, m.nZ)().isEditorFirstRendered.value) return [];
                const i = $(window.editorId),
                  o = R(window.editorId),
                  a = B(window.editorId),
                  n = W(window.editorId),
                  r = D(window.editorId),
                  l = U(window.editorId),
                  d = `editor/${window.editorId}/outliner`,
                  c = `editor/${window.editorId}/mindmap/snowbrush`,
                  s = `editor/${window.editorId}/popover`,
                  u = N(window.editorId),
                  C = {
                    [i]: G(),
                    [o]: q(),
                    [d]: [],
                    [a]: z(),
                    [c]: [],
                    [r]: _(),
                    [n]: j(),
                    [s]: [],
                    [l]: X(),
                    [u]: Y(),
                  },
                  v = {};
                "function" == typeof e && Object.assign(v, e());
                const b = C[i].filter((e) => !!e),
                  f = C[o].concat(v[o]).filter((e) => !!e),
                  w = C[d].concat(v[d]).filter((e) => !!e),
                  y = C[a].concat(v[a]).filter((e) => !!e),
                  T = C[c].concat(v[c]).filter((e) => !!e),
                  I = C[r].concat(v[r]).filter((e) => !!e),
                  k = C[n].concat(v[n]).filter((e) => !!e),
                  M = C[s].concat(v[s]).filter((e) => !!e),
                  E = C[l].concat(v[l]).filter((e) => !!e),
                  x = C[u].concat(v[u]).filter((e) => !!e),
                  S = [],
                  H = [],
                  L = Object.keys(v)
                    .filter((e) => !(e in C))
                    .map((e) => v[e])
                    .reduce((e, t) => [].concat(e).concat(t), [])
                    .filter((e) => !!e);
                let V = !0,
                  P = !0,
                  A = !0,
                  F = !0,
                  Z = !0,
                  O = !0,
                  J = !0,
                  K = !0,
                  Q = !0;
                const ee = (0, g.A)(),
                  te =
                    null !==
                      (t = null == ee ? void 0 : ee.aggregatedContexts) &&
                    void 0 !== t
                      ? t
                      : {},
                  ie = (0, p.$)(),
                  oe = !ie.isOutlinerMode,
                  ae = ie.isOutlinerMode,
                  ne = !!te["mindmap.inEditTitleMode"],
                  re = !!te["mindmap.inDraggingMode"],
                  le = !!te["editor.inBeginnerMode"],
                  de = !!te["editor.inMapShotMode"],
                  ce = !!te["editor.inBeginnerDialog"];
                (V = V && !ce),
                  (P = P && oe),
                  (P = P && !ne),
                  (P = P && !re),
                  (F = F && ae),
                  (Z = Z && ne),
                  (O = O && le && !ne),
                  (J = J && !!te["focus.popover"]),
                  (K = K && de),
                  (Q = Q && oe);
                const se = !!te["focus.input"];
                (P = P && !se),
                  (F = F && !se),
                  (Z = Z && !se),
                  (O = O && !se),
                  (J = J && !se),
                  (K = K && !se);
                const ue =
                  !!te["focus.popover"] || !!te["editor.inPopoverMode"];
                (P = P && !ue),
                  (F = F && !ue),
                  (Z = Z && !ue),
                  (O = O && !ue),
                  (K = K && !ue),
                  (A = A && P);
                const he = !!te["editor.inIMEMode"];
                (V = V && !he), (V = V && !de);
                const pe = ie.pitchMode,
                  me = ie.pitchPresenterViewMode;
                V = V && !pe;
                let ge = [].concat(b);
                const Ce = ["editor.addSheet"];
                V &&
                  (ge.push(...f),
                  P && ge.push(...y),
                  F && ge.push(...w),
                  A && ge.push(...T),
                  ge.push(...S),
                  ge.push(...H),
                  Z && ge.push(...I),
                  O && ge.push(...k),
                  J && ge.push(...M),
                  Q && ge.push(...x),
                  (0, h.E)().sheetRendering &&
                    (ge = ge.filter((e) => Ce.includes(e.id))));
                const ve = ["workbench.toggleInfoCard"];
                return (
                  pe && ge.push(...f.filter((e) => ve.includes(e.id))),
                  me && (ge.push(...T), ge.push(...y)),
                  K && ge.push(...E),
                  ge.push(...L),
                  ge
                );
              },
              (e) => {
                const i = (0, g.A)();
                null == i || i.updateInternalCommands(e), t(e);
              }
            );
          })(() => {
            const e = (0, u.y)().contributedCommands,
              t = {};
            return (
              Object.keys(e).forEach((i) => {
                const o = e[i];
                (t[i] = []),
                  Object.keys(o).forEach((e) => {
                    const a = o[e],
                      n = {
                        id: a.id,
                        provider: a.provider,
                        enabled: Z(a.enabledExpr, a.enabledFn),
                      };
                    t[i].push(n);
                  });
              }),
              t
            );
          });
          const e = (0, u.y)().contributedHandlers,
            t = ((e) => {
              const t = $(window.editorId),
                o = R(window.editorId),
                a = `editor/${window.editorId}/outliner`,
                n = B(window.editorId),
                l = W(window.editorId),
                s = D(window.editorId),
                u = `editor/${window.editorId}/popover`,
                h = U(window.editorId),
                p = N(window.editorId),
                v = {
                  [t]: {
                    "frame.toggleTabbar": () => {
                      const e = (0, g.r)();
                      null == e ||
                        e.setIsShowTabBar(
                          !(null == e ? void 0 : e.isShowTabBar)
                        );
                    },
                    "frame.addNewTab": () => {
                      const e = (0, g.r)();
                      r.ZP.fetch(d.NF, {
                        frameId: null == e ? void 0 : e.frameId,
                      });
                    },
                    "frame.previousTab": Bt,
                    "frame.nextTab": Rt,
                    closeSimpleWindow: () => {
                      const e = (0, g.r)(),
                        t = null == e ? void 0 : e.activeEditorId;
                      t && r.ZP.fetch(d.s2, { editors: [t] });
                    },
                    closeComplexWindow: () =>
                      (0, C.JX)().handleCommand("closeWindow"),
                  },
                  [o]: pt(),
                  [n]: Zt(),
                  [l]: {
                    "editor.addSubTopic": Dt,
                    "editor.addTopic": Ut,
                    "editor.showEditBox": qt,
                    escape: zt,
                  },
                  [s]: $t(),
                  [h]: Gt(),
                  [a]: {},
                  [u]: {},
                  [p]: {
                    versionHistory: ni,
                    "collaboration.report": oi,
                    "collaboration.duplicateFile": li,
                    "collaboration.uploadLocalFile": Jt,
                    "collaboration.inviteCollaborators": Yt,
                    "workbench.exportTextBundle": () =>
                      i
                        .e(6557)
                        .then(i.bind(i, 56463))
                        .then((e) => e.exportTextBundle()),
                    undo: Kt,
                    redo: Qt,
                    "editor.addLocalImage": ei,
                    "editor.addAttachmentOnNewTopic": ti,
                    "editor.deleteMarker": () =>
                      (0, J.C)().checkLocked("mutate:removeMarker"),
                    delete: () => (0, J.C)().checkLocked("mutate:delete"),
                    deleteSingleTopic: () =>
                      (0, J.C)().checkLocked("mutate:deleteTopicNodeOnly"),
                    cut: () => (0, J.C)().checkLocked("cut"),
                    "editor.toggleBranch": () =>
                      (0, J.C)().checkLocked("mutate:foldBranch"),
                    "editor.toggleAllBranch": () =>
                      (0, J.C)().checkLocked(
                        "mutate:foldAllDescendantBranches"
                      ),
                    "editor.previewImage": ii,
                    "editor.showEditBox": () => {
                      var e, t;
                      const {
                        executeMutationAction: i,
                        selection: o,
                        actionStates: a,
                      } = (0, m.nZ)();
                      "image" !==
                      (null === (e = null == o ? void 0 : o.value) ||
                      void 0 === e
                        ? void 0
                        : e.type)
                        ? (null === (t = a.value["mutate:startEditingTopic"]) ||
                          void 0 === t
                            ? void 0
                            : t.disabled) ||
                          i({ name: "mutate:startEditingTopic" })
                        : 1 === o.value.modelIds.length &&
                          ii({ topicId: o.value.modelIds[0] });
                    },
                  },
                },
                b = [];
              Object.keys(v).forEach((e) => {
                b.push(
                  r.ZP.route(
                    (0, d.B_)(e),
                    ({ commandId: e, handlerArgs: t }) => {
                      (0, C.JX)().doHandleCommand(e, t);
                    }
                  )
                );
              });
              const y = () => {
                var e;
                const t = (0, f.FU)().source.startsWith("cloud://"),
                  i = (0, m.nZ)().sheets.value.length;
                if (t) {
                  const t =
                      null === (e = (0, w.c)().cloudFileMeta) || void 0 === e
                        ? void 0
                        : e.teamId,
                    o = (0, w.c)().isTeamOwner,
                    a = (0, w.c)().isTeamMember;
                  return t !== (0, C.c7)().user && a
                    ? {
                        planType: C.k9.TEAM,
                        teamId: t,
                        isTeamOwner: o,
                        sheetNum: i,
                      }
                    : { planType: C.k9.PERSONAL, teamId: t, sheetNum: i };
                }
                return { planType: C.k9.PERSONAL, sheetNum: i };
              };
              return (
                Object.keys(v).forEach((e) => {
                  b.push(r.ZP.route((0, d.gk)(e), y));
                }),
                b.push(r.ZP.route((0, d.gk)(window.editorId), y)),
                (0, c.YP)(
                  () => e(),
                  (e) => {
                    Object.keys(e).forEach((e) => {
                      e in v ||
                        ((v[e] = {}),
                        b.push(
                          r.ZP.route(
                            (0, d.B_)(e),
                            ({ commandId: e, handlerArgs: t }) => {
                              (0, C.JX)().doHandleCommand(e, t);
                            }
                          )
                        ));
                    });
                  }
                ),
                (0, c.YP)(
                  () => window.isBeingDestroyed,
                  (e) => {
                    e && b.forEach((e) => e());
                  },
                  { flush: "sync" }
                ),
                v
              );
            })(() => ({ ...e }));
          (0, C.JX)().injectDoHandleCommand(async (e, i) => {
            var o;
            const a =
                null === (o = (0, g.A)()) || void 0 === o
                  ? void 0
                  : o.commandById(e),
              n = (i && i.provider) || (a && a.provider),
              l = (0, u.y)().contributedHandlers,
              c = (function (e, t) {
                const i = {};
                return (
                  Object.keys(e)
                    .concat(Object.keys(t))
                    .forEach((o) => {
                      i[o] = Object.assign({}, e[o], t[o]);
                    }),
                  i
                );
              })(t, l);
            if (!(n in c))
              return (
                r.ZP.fetch(d.hR, { commandId: e, handlerArgs: i }),
                "interruption"
              );
            {
              const t = c[n][e];
              if (!t)
                throw new Error(
                  `Command (${e}) can't be handled by command provider (${n})`
                );
              const o =
                a &&
                ("function" == typeof a.enabledFn
                  ? a.enabledFn(!0)
                  : a.enabled);
              o &&
                ![
                  "copy",
                  "cut",
                  "paste",
                  "escape",
                  "insertText",
                  "editor.addMarker",
                  "editor.changeImage",
                  "editor.strikethroughText",
                  "editor.boldText",
                  "editor.italicText",
                  "editor.increaseFontSize",
                  "editor.decreaseFontSize",
                  "editor.toggleInsertMenu",
                  "workbench.toggleMarkerPanel",
                  "workbench.toggleRightPanel",
                  "workbench.toggleZenMode",
                ].includes(null == a ? void 0 : a.id) &&
                (0, m.nZ)().executeAction({
                  name: "mutate:interruptingEditSession",
                }),
                o && t(i);
            }
          });
        },
      });
      var ci = i(1031);
      function si(e, t) {
        if (!e || !t) return {};
        let i = 0,
          o = 0,
          a = 0,
          n = 0,
          r = 0,
          l = !1,
          d = 0,
          c = 0,
          s = 0,
          u = 0,
          h = 0,
          p = 0,
          g = 0,
          C = 0,
          v = 0,
          b = 0,
          f = 0;
        const w = e.type,
          y = e.modelIds;
        switch (w) {
          case "topic":
            (i = y.length),
              y.forEach((e) => {
                var i;
                const g =
                  null === (i = t.query({ id: e })) || void 0 === i
                    ? void 0
                    : i.asTopic();
                (o += "summary" === (null == g ? void 0 : g.topicType) ? 1 : 0),
                  (a +=
                    "callout" === (null == g ? void 0 : g.topicType) ? 1 : 0),
                  (n +=
                    "detached" === (null == g ? void 0 : g.topicType) ? 1 : 0),
                  (r += "root" === (null == g ? void 0 : g.topicType) ? 1 : 0),
                  (l = "" === (null == g ? void 0 : g.title)),
                  (d += null == g ? void 0 : g.markers.length),
                  (c += null == g ? void 0 : g.labels.length),
                  (s +=
                    "todo-checkbox" ===
                      (null == g ? void 0 : g.taskPresentation) ||
                    "todo-progress" ===
                      (null == g ? void 0 : g.taskPresentation)
                      ? 1
                      : 0),
                  (p += (null == g ? void 0 : g.notes) ? 1 : 0),
                  (u +=
                    (null == g ? void 0 : g.href) &&
                    ["http", "xmind", "file"].some((e) => g.href.startsWith(e))
                      ? 1
                      : 0),
                  (((null == g ? void 0 : g.href) &&
                    (null == g ? void 0 : g.href.startsWith("xap"))) ||
                    (null == g ? void 0 : g.extensionBy(m.o9.AudioNotes))) &&
                    (h = 1);
              });
            break;
          case "image":
            y.forEach((e) => {
              var i, o;
              const a =
                  null === (i = t.query({ id: e })) || void 0 === i
                    ? void 0
                    : i.asTopic(),
                { getSheetViewer: n } = (0, m.nZ)(),
                r =
                  null === (o = n(a.ownerSheet.id).getSheetFigure()) ||
                  void 0 === o
                    ? void 0
                    : o.topicFigureByTopicId[e];
              (null == a ? void 0 : a.extensionBy(m.o9.Equation))
                ? (b += 1)
                : (v += 1),
                (null == r ? void 0 : r.viewAttributes.hasImageLoadingFailed) &&
                  (f += 1);
            });
            break;
          case "boundary":
            g = y.length;
            break;
          case "relationship":
            C = y.length;
        }
        return {
          "selection.none": 0 === i && 0 === g && 0 === C && 0 === v && 0 === b,
          "selection.single": i + g + C + v + b === 1,
          "selection.couple": i + g + C + v + b === 2,
          "selection.greaterThanCouple": i + g + C + v + b > 2,
          "selection.multiple": i + g + C + v + b > 1,
          "selection.some": i + g + C + v + b >= 1,
          "selection.hasTopic": i > 0,
          "selection.hasCentralTopic": r > 0,
          "selection.hasBoundary": g > 0,
          "selection.hasRelationship": C > 0,
          "selection.hasSummary": o > 0,
          "selection.hasCallout": a > 0,
          "selection.hasFloatingTopic": n > 0,
          "selection.hasImage": v > 0,
          "selection.hasEquation": b > 0,
          "selection.hasImageLoadingFailed": f > 0,
          "selection.onlyCentralTopic":
            i === r && 0 === g && 0 === C && 0 === v && 0 === b,
          "selection.allTopics":
            i > 0 && 0 === g && 0 === C && 0 === v && 0 === b,
          "selection.allBoundaries":
            0 === i && g > 0 && 0 === C && 0 === v && 0 === b,
          "selection.allRelationships":
            0 === i && 0 === g && C > 0 && 0 === v && 0 === b,
          "selection.allSummaries":
            i === o && 0 === g && 0 === C && 0 === v && 0 === b,
          "selection.allCallout":
            i === a && 0 === g && 0 === C && 0 === v && 0 === b,
          "selection.allFloatingTopic":
            i === n && 0 === g && 0 === C && 0 === v && 0 === b,
          "selection.moreThanThreeFloatingTopic": n >= 3,
          "selection.allImages": 0 === i && 0 === g && 0 === C && v > 0,
          "selection.hasTopicWithTitle": !l,
          "selection.hasTopicWithMarker": d > 0,
          "selection.hasTopicWithLabel": c > 0,
          "selection.hasTopicWithTodo": s > 0,
          "selection.hasTopicWithLink": u > 0,
          "selection.onlyTopicWithMarker":
            d > 0 && 0 === c && 0 === u && 0 === s,
          "selection.onlyTopicWithLabel":
            c > 0 && 0 === d && 0 === u && 0 === s,
          "selection.onlyTopicWithTodo": s > 0 && 0 === c && 0 === d && 0 === u,
          "selection.onlyTopicWithLink": u > 0 && 0 === d && 0 === c && 0 === s,
          "selection.hasTopicWithAttachmentOrAudioNote": h > 0,
          "selection.hasTopicNotes": p > 0,
        };
      }
      const ui = {
          start: () => {
            const e = (0, M.U)();
            let t = !1,
              i = !0;
            function o() {
              const t = e.lastFocusedElementTag,
                i = document.querySelector(`[${x}="${t}"]`);
              return (
                !document.activeElement ||
                document.activeElement === document.body ||
                document.activeElement.getAttribute(S) === L ||
                !document.contains(i)
              );
            }
            document.body.setAttribute("tabindex", "-1"),
              document.addEventListener(
                "focus",
                (a) => {
                  var n, r, l, d;
                  if (
                    !(null === (n = a.target) || void 0 === n
                      ? void 0
                      : n.getAttribute(H))
                  ) {
                    if (((i = !1), t)) {
                      const t = (0, v.hb)();
                      null === (r = a.target) ||
                        void 0 === r ||
                        r.setAttribute(x, t),
                        e.updateLastFocusedElementTag(t);
                    } else if (
                      (null === (l = a.target) || void 0 === l
                        ? void 0
                        : l.getAttribute(S)) === L ||
                      a.target === document.body
                    )
                      setTimeout(() => {
                        var t;
                        const i = e.lastFocusedElementTag,
                          a = document.querySelector(`[${x}="${i}"]`);
                        null === (t = null == a ? void 0 : a.focus) ||
                          void 0 === t ||
                          t.call(a, { preventScroll: !0 }),
                          o() && e.updateLastFocusedElementTag(null);
                      }, 10);
                    else {
                      const t = (0, v.hb)();
                      null === (d = a.target) ||
                        void 0 === d ||
                        d.setAttribute(x, t),
                        e.updateLastFocusedElementTag(t);
                    }
                    for (const e of a.path) {
                      if (e === document.body) break;
                      const t = null == e ? void 0 : e.updateFocusContextsFn;
                      if ((t && t(!0), e && e.getAttribute(E))) break;
                    }
                  }
                },
                !0
              ),
              document.addEventListener(
                "blur",
                (a) => {
                  var n;
                  if (
                    null === (n = a.target) || void 0 === n
                      ? void 0
                      : n.getAttribute(H)
                  )
                    return;
                  i = !0;
                  const r = e.lastFocusedElementTag,
                    l = document.querySelector(`[${x}="${r}"]`);
                  if (document.hasFocus() || document.activeElement !== l) {
                    for (const e of a.path) {
                      if (e === document.body) break;
                      const t = e && e.updateFocusContextsFn;
                      if ((t && t(!1), e && e.getAttribute(E))) break;
                    }
                    (!t || (i && document.activeElement === document.body)) &&
                      setTimeout(() => {
                        var t;
                        if (i) {
                          const i = e.lastFocusedElementTag,
                            a = document.querySelector(`[${x}="${i}"]`);
                          null === (t = null == a ? void 0 : a.focus) ||
                            void 0 === t ||
                            t.call(a, { preventScroll: !0 }),
                            o() && e.updateLastFocusedElementTag(null);
                        }
                      }, 10);
                  }
                },
                !0
              ),
              document.addEventListener(
                "keydown",
                (e) => {
                  t = 9 === e.keyCode;
                },
                !0
              ),
              document.addEventListener(
                "mousedown",
                () => {
                  t = !1;
                },
                !0
              ),
              document.addEventListener(
                "keyup",
                () => {
                  t = !1;
                },
                !0
              ),
              c.ZP.directive("focus-contexts", {
                bind(e, t) {
                  const i = t.value,
                    o = t.arg;
                  "group" === o
                    ? e.setAttribute(E, (0, v.hb)())
                    : "no" === o
                    ? e.setAttribute(S, L)
                    : "no-effect" === o && e.setAttribute(H, "true"),
                    i &&
                      Array.isArray(i) &&
                      (e.updateFocusContextsFn = (e) => {
                        const t = {};
                        i.forEach((i) => {
                          t[i] = !!e;
                        });
                        const o = (0, g.A)();
                        null == o || o.updateContexts(t);
                      });
                },
              }),
              (0, c.YP)(
                () => o(),
                (e) => {
                  if (e) {
                    const e = (0, g.A)(),
                      t = (null == e ? void 0 : e.aggregatedContexts) || {},
                      i = {};
                    Object.keys(t).forEach((e) => {
                      e.startsWith("focus") && (i[e] = !1);
                    }),
                      null == e || e.updateContexts(i);
                  }
                },
                { immediate: !0 }
              );
          },
        },
        hi = a().parse(window.location.search.slice(1)),
        pi = hi.editorId || "";
      window.editorId = pi;
      const mi = hi.source;
      let gi = "",
        Ci = "";
      async function vi() {
        let e = null;
        await new Promise((t) => {
          e = (0, c.YP)(
            () => (0, p.$)().isWorkbenchReady,
            (e) => {
              e && t(!0);
            },
            { immediate: !0 }
          );
        }),
          e && e();
      }
      (gi = document.querySelector("html").style.backgroundColor),
        (Ci = document.querySelector("html").style.opacity),
        (document.querySelector("html").style.backgroundColor = "transparent"),
        (document.querySelector("html").style.opacity = 0),
        (0, n.Z)(I, {
          name: "editor",
          piniaPlugins: [],
          runAfterPiniaPlugin: (e) => {
            ui.start();
            (async () => {
              const e = {
                start: async () => {
                  const {
                      syncedSelection: e,
                      document: t,
                      isEditingTitle: i,
                      isInBranchOnly: o,
                    } = (0, m.nZ)(),
                    { isActivationValid: a, updatePlanPayload: n } = (0,
                    ci.g)();
                  (0, c.YP)(
                    e,
                    () => {
                      var i;
                      const o = si(e.value, t.value);
                      null === (i = (0, g.A)()) ||
                        void 0 === i ||
                        i.updateContexts(o);
                    },
                    { immediate: !0 }
                  ),
                    (0, c.YP)(t, () => {
                      var i;
                      const o = si(e.value, t.value);
                      null === (i = (0, g.A)()) ||
                        void 0 === i ||
                        i.updateContexts(o);
                    }),
                    (0, c.YP)(
                      i,
                      (e) => {
                        var t;
                        null === (t = (0, g.A)()) ||
                          void 0 === t ||
                          t.updateContexts({ "mindmap.inEditTitleMode": e });
                      },
                      { immediate: !0 }
                    ),
                    (0, c.YP)(
                      () => (0, h.E)().isBeginnerModeVisible,
                      (e) => {
                        var t;
                        null === (t = (0, g.A)()) ||
                          void 0 === t ||
                          t.updateContexts({ "editor.inBeginnerMode": e });
                      }
                    ),
                    (0, c.YP)(
                      () => (0, h.E)().isBeginnerDialogVisible,
                      (e) => {
                        var t;
                        null === (t = (0, g.A)()) ||
                          void 0 === t ||
                          t.updateContexts({ "editor.inBeginnerDialog": e });
                      }
                    ),
                    (0, c.YP)(o, (e) => {
                      var t;
                      null === (t = (0, g.A)()) ||
                        void 0 === t ||
                        t.updateContexts({ "mindmap.inBranchOnly": e });
                    }),
                    (0, c.YP)(
                      () => (0, p.$)().popoverEditorVisible,
                      (e) => {
                        var t, i;
                        null === (t = (0, g.A)()) ||
                          void 0 === t ||
                          t.updateContextsSync({ "editor.inPopoverMode": !!e }),
                          "notes" === e &&
                            (null === (i = (0, g.A)()) ||
                              void 0 === i ||
                              i.updateContextsSync({
                                "editor.inNotesPopoverMode": !0,
                              }));
                      }
                    ),
                    (0, c.YP)(
                      () => [(0, w.c)().connectionMode, (0, w.c)().isConnected],
                      ([e, t]) => {
                        var i;
                        const o =
                          (0, f.FU)().source.startsWith("cloud://") &&
                          ("readonly" === e || !t);
                        null === (i = (0, g.A)()) ||
                          void 0 === i ||
                          i.updateContexts({ "collaboration.isReadOnly": o });
                      },
                      { immediate: !1 }
                    ),
                    (0, c.YP)(
                      () => (0, f.FU)().source,
                      (e) => {
                        var t, i;
                        const o = e.startsWith("cloud://");
                        null === (t = (0, g.A)()) ||
                          void 0 === t ||
                          t.updateContexts({ "collaboration.isFromCloud": o }),
                          o ||
                            null === (i = (0, g.A)()) ||
                            void 0 === i ||
                            i.updateContexts({
                              "collaboration.isReadOnly": !1,
                            });
                      },
                      { immediate: !1 }
                    ),
                    (0, c.YP)(
                      () => {
                        var e;
                        return null === (e = (0, w.c)().cloudFileMeta) ||
                          void 0 === e
                          ? void 0
                          : e.teamId;
                      },
                      async (e) => {
                        var t;
                        const i = e && e === (0, C.c7)().user;
                        e &&
                          !i &&
                          (null === (t = (0, g.A)()) ||
                            void 0 === t ||
                            t.updateContexts({
                              "collaboration.isFromTeam": !0,
                            }));
                        const o = await r.ZP.fetch((0, d.gk)(window.editorId));
                        n(o);
                      },
                      { immediate: !1 }
                    ),
                    (0, c.YP)(
                      () => a.value,
                      (e) => {
                        var t;
                        null === (t = (0, g.A)()) ||
                          void 0 === t ||
                          t.updateContexts({ "activation.isValid": e });
                      },
                      { immediate: !0 }
                    );
                },
              };
              di().start(), e.start();
            })();
          },
          editorId: pi,
        }).then(async (e) => {
          const t = r.ZP.route((0, d.uT)(window.editorId), () => {
              window.isBeingDestroyed ||
                ((window.isBeingDestroyed = !0), e.$destroy(), t()),
                setTimeout(() => {
                  window.isDestroyed = !0;
                }, 0);
            }),
            i = (0, f.FU)();
          await i.init(mi || "new://workbook", pi);
        }),
        (0, c.YP)(
          () => (0, k.i)().ready,
          async (e) => {
            if (!e) return;
            const t = (0, C.OD)((0, l.aJ)(pi));
            (0, c.YP)(
              () => t().ownerFrameId,
              async (e, i) => {
                if (!e) return;
                window.getCurrentWindowAsync?.().then((e) => {
                  e &&
                    (e.isMaximized()
                      ? (document.body.classList?.add("uk-window-maximized"),
                        window.dispatchEvent(new Event("maximize")))
                      : (document.body.classList?.remove("uk-window-maximized"),
                        window.dispatchEvent(new Event("restore"))));
                }),
                  (0, C.d1)((0, l.v3)(i));
                const o = (0, l.v3)(e),
                  a = await r.ZP.fetch(d.Pp, {
                    mutations: [{ id: o, kind: "frame" }],
                  }),
                  n = (0, C.M4)(o)(),
                  s = a[o];
                n.$patch((0, c.qj)(s));
                const h = t();
                h.isAlive
                  ? vi().then(() => {
                      (document.querySelector("html").style.backgroundColor =
                        gi),
                        (document.querySelector("html").style.opacity = Ci);
                    })
                  : vi().then(() => {
                      (document.querySelector("html").style.backgroundColor =
                        gi),
                        (document.querySelector("html").style.opacity = Ci),
                        requestIdleCallback(
                          () => {
                            h.setAlive(!0), (0, u.y)().setAlive(!0);
                          },
                          { timeout: 100 }
                        );
                    });
                const p = await window.getWindowIdAsync(),
                  m = (0, l.b3)(p),
                  g = await r.ZP.fetch(d.Pp, {
                    mutations: [{ id: m, kind: "window" }],
                  });
                (0, C._t)(m)().$patch((0, c.qj)(g[m])),
                  (0, f.FU)().updateMemento(!1);
              },
              { immediate: !0 }
            );
          }
        );
    },
    85786: (e, t, i) => {
      i.d(t, { DL: () => u, Xf: () => c, Yv: () => s, vQ: () => h });
      var o = i(22037),
        a = i.n(o),
        n = i(57310),
        r = i.n(n),
        l = i(72298),
        d = i(13382);
      function c() {
        return "win32";
      }
      function s() {
        return {
          platform: a().platform(),
          arch: a().arch(),
          release: a().release(),
        };
      }
      function u(e, t) {
        const i = r().parse(e).protocol,
          o = t || ((e) => e);
        l.shell.openExternal(i ? e : `http://${e}`).catch(() => {
          (0, d.N0)({
            title: "Xmind",
            message: o("Unable to open link."),
            detail: o(
              "This link is invalid and cannot be opened through browser."
            ),
            buttons: [o("OK")],
          });
        });
      }
      function h(e) {
        l.clipboard.writeText(e);
      }
    },
    40623: (e, t, i) => {
      var o;
      i.d(t, { vP: () => o, wZ: () => a, zF: () => n }),
        (function (e) {
          (e.LOGICRIGHT = "org.xmind.ui.logic.right"),
            (e.LOGICLEFT = "org.xmind.ui.logic.left"),
            (e.TREERIGHT = "org.xmind.ui.tree.right"),
            (e.TREELEFT = "org.xmind.ui.tree.left"),
            (e.TREESIDED = "org.xmind.ui.timeline.vertical"),
            (e.ORGCHARTDOWN = "org.xmind.ui.org-chart.down"),
            (e.ORGCHARTUP = "org.xmind.ui.org-chart.up"),
            (e.MAPCLOCKWISE = "org.xmind.ui.map.clockwise"),
            (e.MAPANTICLOCKWISE = "org.xmind.ui.map.anticlockwise"),
            (e.MAP = "org.xmind.ui.map"),
            (e.MAPUNBALANCED = "org.xmind.ui.map.unbalanced"),
            (e.MAPFLOATING = "org.xmind.ui.map.floating"),
            (e.MAPFLOATINGCLOCKWISE = "org.xmind.ui.map.floating.clockwise"),
            (e.MAPFLOATINGANTICLOCKWISE =
              "org.xmind.ui.map.floating.anticlockwise"),
            (e.TIMELINETHROUGHVERTICAL =
              "org.xmind.ui.timeline.through.vertical"),
            (e.TIMELINESIDEDHORIZONTAL =
              "org.xmind.ui.timeline.sided.horizontal"),
            (e.TIMELINEHORIZONTAL = "org.xmind.ui.timeline.horizontal"),
            (e.FISHBONELEFTHEADED = "org.xmind.ui.fishbone.leftHeaded"),
            (e.LEFTHEADTOPBONE =
              "org.xmind.ui.fishbone.structure.lefthead.topbone"),
            (e.LEFTHEADBOTTOMBONE =
              "org.xmind.ui.fishbone.structure.lefthead.bottombone"),
            (e.FISHBONERIGHTHEADED = "org.xmind.ui.fishbone.rightHeaded"),
            (e.RIGHTHEADTOPBONE =
              "org.xmind.ui.fishbone.structure.righthead.topbone"),
            (e.RIGHTHEADBOTTOMBONE =
              "org.xmind.ui.fishbone.structure.righthead.bottombone"),
            (e.SPREADSHEET = "org.xmind.ui.spreadsheet"),
            (e.COLUMNSPREADSHEET = "org.xmind.ui.spreadsheet.column"),
            (e.TREETABLE = "org.xmind.ui.treetable"),
            (e.TOPTITLETREETABLE = "org.xmind.ui.treetable.toptitle"),
            (e.SPREADSHEETROW = "org.xmind.ui.structure.spreadsheet.row"),
            (e.SPREADSHEETCOLUMN = "org.xmind.ui.structure.column.spreadsheet"),
            (e.FISHBONELEFTHEADTOP = "org.xmind.ui.fishbone.leftHeaded.top"),
            (e.FISHBONELEFTHEADBOTTOM =
              "org.xmind.ui.fishbone.leftHeaded.bottom"),
            (e.FISHBONERIGHTHEADTOP = "org.xmind.ui.fishbone.rightHeaded.top"),
            (e.FISHBONERIGHTHEADBOTTOM =
              "org.xmind.ui.fishbone.rightHeaded.bottom"),
            (e.TIMELINEHORIZONTALUP = "org.xmind.ui.timeline.horizontal.up"),
            (e.TIMELINEHORIZONTALDOWN =
              "org.xmind.ui.timeline.horizontal.down"),
            (e.LOGICCHARTRIGHT = "org.xmind.ui.logic-chart.right"),
            (e.LOGICCHARTLEFT = "org.xmind.ui.logic-chart.left"),
            (e.BRACERIGHT = "org.xmind.ui.brace.right"),
            (e.BRACELEFT = "org.xmind.ui.brace.left"),
            (e.TIMELINEVERTICAL = "org.xmind.ui.timeline.vertical");
        })(o || (o = {}));
      const a = {
          [o.MAPUNBALANCED]: "map-unbalance",
          [o.MAPCLOCKWISE]: "map-clockwise",
          [o.LOGICRIGHT]: "logic-right",
          [o.LOGICLEFT]: "logic-left",
          [o.BRACERIGHT]: "brace-right",
          [o.BRACELEFT]: "brace-left",
          [o.TREERIGHT]: "tree-right",
          [o.TREELEFT]: "tree-left",
          [o.ORGCHARTDOWN]: "org-down",
          [o.ORGCHARTUP]: "org-up",
          [o.FISHBONELEFTHEADED]: "fishbone-left",
          [o.FISHBONERIGHTHEADED]: "fishbone-right",
          [o.TIMELINEHORIZONTAL]: "timeline-horizontal",
          [o.TIMELINEVERTICAL]: "timeline-vertical",
          [o.TIMELINETHROUGHVERTICAL]: "timeline-through-vertical",
          [o.TIMELINESIDEDHORIZONTAL]: "timeline-sided-horizontal",
          [o.SPREADSHEET]: "matrix-row",
          [o.COLUMNSPREADSHEET]: "matrix-column",
          [o.TOPTITLETREETABLE]: "tree-table-column",
          [o.TREETABLE]: "tree-table-row",
        },
        n = { png: "image/png", jpeg: "image/jpeg", svg: "image/svg+xml" };
    },
    67214: (e, t, i) => {
      function o(e) {
        const t = window.getSelection();
        t.removeAllRanges();
        const i = document.createRange();
        i.selectNode(e), t.addRange(i);
      }
      i.d(t, { FW: () => o, N8: () => a, d5: () => n, vV: () => r });
      const a = (e) => {
          const t = new Image();
          return new Promise((i, o) => {
            (t.onload = function () {
              const { height: e, width: o } = t;
              i({ height: e, width: o });
            }),
              (t.onerror = (e) => o(e)),
              (t.src = e);
          });
        },
        n = (() => {
          let e, t;
          return () => (
            e ||
              ((t = document.createElement("canvas")),
              (e = t.getContext("2d"))),
            { ctx: e, canvas: t }
          );
        })(),
        r = (e, t, i, o, a, n) => {
          const r = e.getContext("2d");
          return new Promise((e) => {
            const l = new Image();
            (l.src = t),
              l.addEventListener("load", () => {
                r.drawImage(l, i, o, a, n), e();
              });
          });
        };
    },
    1031: (e, t, i) => {
      i.d(t, { g: () => n });
      var o = i(2954),
        a = i(87141);
      const n = (e) => {
        let t = e || { planType: a.k9.PERSONAL };
        const i = (0, o.iH)(!1),
          n = (e) => {
            i.value = (0, a.Yh)().checkActivationValid(e);
          };
        return (
          (0, o.YP)(
            () => (0, a.Yh)().subscriptionPlan,
            () => {
              n(t);
            },
            { immediate: !0 }
          ),
          {
            isActivationValid: i,
            updatePlanPayload: (e) => {
              (t = e), n(e);
            },
          }
        );
      };
    },
    95185: (e, t, i) => {
      i.d(t, { q: () => a });
      var o = i(2954);
      i(63111), i(54856), i(96829), i(87141), i(18446), i(90435);
      function a(e, t, i = !1) {
        (0, o.iH)({});
        let a = () => {};
        return { updateTouchBarItems: a };
      }
    },
    19741: (e, t, i) => {
      i.d(t, { y: () => n });
      var o = i(77412),
        a = i(2954);
      const n = (0, o.Q_)("editor-app", () => {
        const e = (0, a.iH)({}),
          t = (0, a.iH)({}),
          i = (0, a.iH)(!1);
        return {
          contributedCommands: e,
          contributedHandlers: t,
          registerCommands: (i) => {
            Array.isArray(i) &&
              (i.forEach((i) => {
                const o = i.id,
                  a = i.provider,
                  n = i.handler;
                o &&
                  a &&
                  n &&
                  ((i.enabledExpr || i.enabledFn) &&
                    ((e.value[a] = e.value[a] || {}), (e.value[a][o] = i)),
                  (t.value[a] = t.value[a] || {}),
                  (t.value[a][o] = n));
              }),
              (e.value = { ...e.value }),
              (t.value = { ...t.value }));
          },
          unregisterCommands: (i) => {
            Array.isArray(i) &&
              (i.forEach(({ id: i, provider: o }) => {
                o in e.value && delete e.value[o][i],
                  o in t.value && delete t.value[o][i];
              }),
              (e.value = { ...e.value }),
              (t.value = { ...t.value }));
          },
          isAlive: i,
          setAlive: (e) => (i.value = e),
        };
      });
    },
    18264: (e, t, i) => {
      i.d(t, { U: () => n });
      var o = i(77412),
        a = i(2954);
      const n = (0, o.Q_)("focus", () => {
        const e = (0, a.iH)("initial"),
          t = (0, a.Fl)(() => null === e.value);
        return {
          lastFocusedElementTag: e,
          isFocusMissing: t,
          updateLastFocusedElementTag: (t) => (e.value = t),
        };
      });
    },
    69361: (e, t, i) => {
      i.d(t, {
        Ae: () => C,
        C7: () => I,
        Gm: () => v,
        J2: () => T,
        Y8: () => y,
        nv: () => w,
        sA: () => k,
        yS: () => f,
      });
      var o = i(67657),
        a = i(90435),
        n = i(94593),
        r = i(13382),
        l = i(54856),
        d = i(96829),
        c = i(40623),
        s = i(12455),
        u = i(84374),
        h = i(87141),
        p = i(5893),
        m = i(60746),
        g = i(67214);
      async function C(e) {
        (0, s.A)().setExporting(!0),
          a.ZP.fetch(l.Fx, {
            name: "dialog-progress",
            parentId: window.id,
            wait: !0,
            query: { type: e, editorId: window.editorId },
          });
      }
      async function v() {
        const e = await a.ZP.fetch(l._z, { name: "dialog-progress" }),
          t = e && o.BrowserWindow.fromId(e);
        if (t) {
          if (!t.rendererJSLoad)
            return new Promise((e) => {
              t.once("renderer-js-load", async () => {
                (0, s.A)().setExporting(!1),
                  await a.ZP.fetch(l.g_, { name: "dialog-progress" }),
                  await (0, d._v)(100),
                  e(void 0);
              });
            });
          (0, s.A)().setExporting(!1),
            await a.ZP.fetch(l.g_, { name: "dialog-progress" }),
            await (0, d._v)(100);
        }
      }
      const b = async () => {
          const e = (0, h.JE)().T;
          await (0, r.N0)({
            type: "warning",
            message: e("File Replacement Failed"),
            detail: e(
              "The file has been occupied by other application, please close it and try again."
            ),
            buttons: [e("OK")],
          });
        },
        f = async (e, t) => {
          try {
            await n.Z.writeFile(e, t);
          } catch (e) {
            "EBUSY" === e.code && (await b());
          }
        },
        w = (e) => {
          const { document: t, activeSheet: i } = (0, u.nZ)();
          if (!e || 0 === e.length) return [];
          const o = Array.from(e),
            a = i.value.rootTopic.id;
          return (
            e.forEach((i) => {
              let n = i;
              for (; n !== a; ) {
                const a = t.value.query({ id: n }).asTopic().parentTopic.id;
                if (e.includes(a)) {
                  o.splice(o.indexOf(i), 1);
                  break;
                }
                n = a;
              }
            }),
            o
          );
        };
      class y {
        constructor() {
          (this.fileNameLists = []),
            (this.avoidRepeatName = (e, t = 2) => {
              const i = `${e}_${t}`;
              return this.fileNameLists.includes(i)
                ? this.avoidRepeatName(e, t + 1)
                : i;
            });
        }
        makeSafeName(e) {
          let t = null != e ? e : "";
          this.fileNameLists.includes(e) && (t = this.avoidRepeatName(e, 2));
          const i = (0, p.N6)(t);
          return this.fileNameLists.push(i), i;
        }
      }
      const T = async (e, t) => {
        let i;
        try {
          i = await e();
        } catch (e) {
          if (
            (await v(), "string" == typeof (o = e) && o.indexOf("timeout") > -1)
          ) {
            let i = "Unknown Error";
            return (
              e && (i = e.stack || e.message || e.toString()),
              t && t.error(i),
              (() => {
                const e = (0, h.JE)().T;
                (0, r.N0)({
                  type: "warning",
                  message: e("Failed to export this file."),
                  detail: e(
                    "Your ideas are beyond Xmind’s capacity. We suggest you to split this file into multiple files before next step."
                  ),
                  buttons: [e("OK")],
                });
              })(),
              null
            );
          }
          throw e;
        }
        var o;
        return i;
      };
      async function I() {
        const e = [
            "png",
            "apng",
            "jpg",
            "jpeg",
            "jpe",
            "jif",
            "jfif",
            "jfi",
            "tif",
            "webp",
            "gif",
            "svg",
            "xbm",
            "xbm",
            "dib",
            "ico",
          ],
          { sheets: t } = (0, u.nZ)(),
          i = function (t) {
            const o = null == t ? void 0 : t.imageSource,
              a = null == t ? void 0 : t.children;
            if (o) {
              let t = 0;
              return (
                (t = a ? a.reduce((e, t) => e + i(t), 0) : 0),
                e.some((e) => o.endsWith(e)) ? 1 + t : t
              );
            }
            return a ? a.reduce((e, t) => e + i(t), 0) : 0;
          },
          o = t.value.reduce((e, t) => e + i(t.rootTopic), 0);
        return new Promise((e) => setTimeout(e, 100 * o));
      }
      const k = (e, t = 1, i, o) =>
          new Promise((a, n) => {
            const { ctx: r, canvas: l } = (0, g.d5)();
            r.clearRect(0, 0, l.width, l.height);
            const d = new Image();
            (d.src = e),
              d.addEventListener("load", () => {
                window.requestIdleCallback(
                  async () => {
                    const e = await (0, m.mi)(d.width, d.height, t);
                    (l.width = d.width * e),
                      (l.height = d.height * e),
                      (r.imageSmoothingEnabled = !1),
                      M(d, d.width, d.height, l, l.width, l.height),
                      "blob" === i
                        ? l.toBlob((e) => a(e), c.zF[o])
                        : "string" === i && a(l.toDataURL(c.zF[o]));
                  },
                  { timeout: 100 }
                );
              }),
              d.addEventListener("error", () => {
                n(null);
              });
          }),
        M = (e, t, i, o, a, n) => {
          const r = o.getContext("2d"),
            l = document.createElement("canvas"),
            d = Math.min(1e4, a),
            c = Math.min(1e4, n);
          (l.width = d), (l.height = c);
          const s = l.getContext("2d"),
            u = E(a, d) + (0 !== x(a, d) ? 1 : 0),
            h = E(n, c) + (0 !== x(n, c) ? 1 : 0),
            p = (t / a) * d,
            m = (i / n) * c;
          r.clearRect(0, 0, a, n);
          for (let t = 0; t < h; t++)
            for (let i = 0; i < u; i++)
              s.clearRect(0, 0, d, c),
                s.drawImage(e, i * p, t * m, p, m, 0, 0, d, c),
                r.drawImage(l, i * d, t * c);
        },
        E = (e, t) => (e - (e % t)) / t,
        x = (e, t) => e % t;
    },
    16794: (e, t, i) => {
      i.d(t, { UM: () => r, g5: () => d, k6: () => l });
      var o = i(96829),
        a = i(60746),
        n = i(69361);
      function r(e, t) {
        const i = (0, a.gP)(),
          o = (e.pageSizes && e.pageSizes[t]) || e.pageSize,
          n = (e.pageSizes && e.pageSizes[t].orientation) || e.orientation,
          r = {
            x: "portrait" === n ? o.x : o.y,
            y: "portrait" === n ? o.y : o.x,
          };
        return {
          orientation: n,
          targetPage: r,
          pageSize: {
            x: Math.round(
              ((r.x - e.margins.left - e.margins.right) * i.x) / 25.4
            ),
            y: Math.round(
              ((r.y - e.margins.top - e.margins.bottom) * i.y) / 25.4
            ),
          },
        };
      }
      async function l(e, t) {
        await (0, n.C7)();
        const { cleanUp: i, addToRemoveEl: l } = (function () {
            const e = [];
            return {
              cleanUp: {
                clean() {
                  e.forEach((e) => e.remove()), (e.length = 0);
                },
                effectSide: {},
              },
              addToRemoveEl(t) {
                e.push(t);
              },
            };
          })(),
          d = (0, a.gP)(),
          s = { forSheets: {} };
        i.effectSide = s;
        const u = {};
        "actualSize" == e.scale
          ? Object.keys(t).forEach((i) => {
              const a = t[i];
              s.forSheets[i] = [];
              const { orientation: n, targetPage: d, pageSize: c } = r(e, i),
                h = Math.ceil(a.width / c.x),
                p = Math.ceil(a.height / c.y),
                m = (h * c.x - a.width) / 2,
                g = (p * c.y - a.height) / 2;
              for (let t = 0; t < p; t++)
                for (let r = 0; r < h; r++) {
                  const h = "print_" + (0, o.hb)();
                  s.forSheets[i].push(h),
                    (u[
                      h
                    ] = `@page{\n            size:${d.x}mm ${d.y}mm ${n};\n              }`);
                  const p = a.data.cloneNode(!0);
                  p.setAttribute(
                    "viewBox",
                    r * c.x - m + " " + (t * c.y - g) + " " + c.x + " " + c.y
                  ),
                    p.setAttribute("width", c.x.toString()),
                    p.setAttribute("height", c.y.toString()),
                    p.setAttribute("id", h),
                    (p.style.display = ""),
                    p.classList.add("print-el"),
                    e.boundaryFillNone &&
                      Array.from(
                        p.querySelectorAll('[data-name="boundary-path"]')
                      ).forEach((e) => e.setAttribute("fill", "none")),
                    document.body.append(p),
                    document.body.appendChild(p),
                    l(p);
                }
            })
          : Object.keys(t).forEach((i) => {
              const a = t[i];
              s.forSheets[i] = [];
              const { orientation: n, targetPage: c, pageSize: h } = r(e, i),
                p = "print_" + (0, o.hb)();
              s.forSheets[i].push(p),
                (u[
                  p
                ] = `@page{\n        size:${c.x}mm ${c.y}mm ${n};\n            }`);
              const m = a.data;
              if (
                (m.setAttribute("width", h.x.toString()),
                m.setAttribute("height", h.y.toString()),
                m.setAttribute("id", p),
                (m.style.display = ""),
                m.classList.add("print-el"),
                e.boundaryFillNone &&
                  Array.from(
                    m.querySelectorAll('[data-name="boundary-path"]')
                  ).forEach((e) => e.setAttribute("fill", "none")),
                document.body.append(m),
                l(m),
                e.withFooter)
              ) {
                const t = (function (e, t) {
                  const i = document.createElement("div");
                  return (
                    i.setAttribute("id", e),
                    i.classList.add("print-el"),
                    (i.style.pageBreakAfter = "always"),
                    Object.assign(i.style, { width: "100%", height: `${t}px` }),
                    i
                  );
                })(
                  p + "-footer",
                  Math.floor(((e.margins.bottom - 2) * d.y) / 25.4)
                );
                l(t), t && document.body.appendChild(t);
              }
            });
        const h = document.createElement("style");
        return (
          (h.id = "print_css"),
          (h.innerHTML = c(e.margins, e.withFooter)),
          document.head.append(h),
          l(h),
          (i.hideSvg = (e) => {
            const t = document.getElementById(e);
            t && t.classList.add("hide-print-el");
            const i = e + "-footer",
              o = document.getElementById(i);
            o && o.classList.add("hide-print-el");
            const a = e + "_print_css",
              n = document.getElementById(a);
            n && n.remove();
          }),
          (i.showSvg = (e) => {
            const t = document.getElementById(e);
            t && t.classList.remove("hide-print-el");
            const i = e + "-footer",
              o = document.getElementById(i);
            o && o.classList.remove("hide-print-el");
            const a = e + "_print_css",
              n = document.getElementById(a);
            n && n.remove();
            const r = document.createElement("style");
            (r.id = `${e}_print_css`),
              (r.innerHTML = u[e]),
              document.head.append(r),
              l(r);
          }),
          await (0, a.SX)(),
          i
        );
      }
      async function d(e, t) {
        await (0, n.C7)();
        const { cleanUp: i, addToRemoveEl: r } = (function () {
            const e = [];
            return {
              cleanUp: {
                clean() {
                  e.forEach((e) => e.remove()), (e.length = 0);
                },
                effectSide: {},
              },
              addToRemoveEl(t) {
                e.push(t);
              },
            };
          })(),
          l = (0, a.gP)(),
          d = { forSheets: {} };
        i.effectSide = d;
        const s = {};
        Object.keys(t).forEach((i) => {
          const a = t[i];
          d.forSheets[i] = [];
          const n = (e.pageSizes && e.pageSizes[i]) || e.pageSize,
            c = (e.pageSizes && e.pageSizes[i].orientation) || e.orientation,
            u = "portrait" === c ? n.x : n.y,
            h = "portrait" === c ? n.y : n.x,
            p = {
              x: Math.round(
                ((u - e.margins.left - e.margins.right) * l.x) / 25.4
              ),
              y: Math.round(
                ((h - e.margins.top - e.margins.bottom) * l.y) / 25.4
              ),
            },
            m = "print_" + (0, o.hb)();
          d.forSheets[i].push(m);
          const g = `@page {\n        size:${u}mm ${h}mm ${c};\n    }`;
          s[m] = g;
          const C = a.data;
          C.setAttribute("width", p.x.toString()),
            C.setAttribute("height", p.y.toString()),
            C.setAttribute("id", m),
            (C.style.display = ""),
            C.classList.add("print-el"),
            e.boundaryFillNone &&
              Array.from(
                C.querySelectorAll('[data-name="boundary-path"]')
              ).forEach((e) => e.setAttribute("fill", "none")),
            document.body.append(C),
            r(C);
        });
        const u = document.createElement("style");
        return (
          (u.id = "print_css"),
          (u.innerHTML = c(e.margins, e.withFooter)),
          document.head.append(u),
          r(u),
          (i.hideSvg = (e) => {
            const t = document.getElementById(e);
            t && t.classList.add("hide-print-el");
            const i = e + "-footer",
              o = document.getElementById(i);
            o && o.classList.add("hide-print-el");
            const a = e + "_print_css",
              n = document.getElementById(a);
            n && n.remove();
          }),
          (i.showSvg = (e) => {
            const t = document.getElementById(e);
            t && t.classList.remove("hide-print-el");
            const i = e + "-footer",
              o = document.getElementById(i);
            o && o.classList.remove("hide-print-el");
            const a = e + "_print_css",
              n = document.getElementById(a);
            n && n.remove();
            const l = document.createElement("style");
            (l.id = `${e}_print_css`),
              (l.innerHTML = s[e]),
              document.head.append(l),
              r(l);
          }),
          await (0, a.SX)(),
          i
        );
      }
      const c = (e, t) =>
        `\n  .print-el{\n    display:none;\n    overflow: hidden;\n  }\n  @page{\n    margin-top:${
          e.top
        }mm;\n    margin-left:${e.left}mm;\n    margin-right:${
          e.right
        }mm;\n    margin-bottom:${
          t ? 0 : 0 === e.bottom ? -2 : e.bottom
        }mm;\n  }\n  @media print{\n    .print-el{\n      display: block;\n    }\n    .hide-print-el {\n      display: none !important;\n    }\n    *{\n      webkit-transition: none !important;\n      transition: none !important;\n    }\n    html{\n      background-color:#fff;\n    }\n    body{\n      overflow:visible!important;\n      background-color:#fff;\n    }\n    #app{\n      display: none !important;\n    }\n    .uk-icon-panel {\n      display: none !important;\n    }\n    #popover-container-for-editor {\n      display: none !important;\n    }\n  }\n  `;
    },
    72623: (e, t, i) => {
      i.d(t, { J: () => a });
      var o = i(65389);
      async function a(
        { hasWatermark: e, orientation: t, pageSize: i, margins: a },
        n = ""
      ) {
        const { cleanUp: r, addToRemoveEl: l } = (() => {
            let e = [];
            return {
              cleanUp() {
                e.forEach((e) => e.remove()), (e = []);
              },
              addToRemoveEl: (t) => (e.push(t), t),
            };
          })(),
          d = "portrait" === t ? i.x : i.y,
          c = "portrait" === t ? i.y : i.x,
          s = n ? `.outliner-${n} .outliner-container` : ".outliner-container",
          u = document.querySelector(s).cloneNode(!0),
          h = document.createElement("div");
        if (
          (h.classList.add("print-el"),
          h.append(u),
          document.body.append(h),
          l(h),
          e)
        ) {
          const { url: e, width: t } = (0, o.CG)(),
            i = document.createElement("img");
          (i.src = e),
            (i.style.zIndex = "1"),
            (i.style.position = "fixed"),
            (i.style.left = "50%"),
            (i.style.bottom = "0"),
            (i.style.transform = `translateX(-${t / 2}px)`),
            (i.className = "print-el"),
            document.body.appendChild(i),
            l(i);
        }
        const p = `\n    .print-el {\n      display: none;\n    }\n    @page{\n      size: ${d}mm ${c}mm ${t};\n      margin-top: ${a.top};\n      margin-left: ${a.left};\n      margin-right:  ${a.right};\n      margin-bottom: ${a.bottom};\n    }\n    @media print {\n      .print-el {\n        display: block;\n        position: relative;\n      }\n      * {\n        webkit-transition: none !important;\n        transition: none !important;\n      }\n      html {\n        background-color: #fff;\n      }\n      body {\n        overflow: visible !important;\n        background-color: #fff;\n      }\n      #app {\n        display: none !important;\n      }\n      em {\n        font-family: auto !important;\n      }\n    }\n  `,
          m = document.createElement("style");
        return (
          (m.id = "print_css"),
          (m.innerHTML = p),
          document.head.append(m),
          l(m),
          r
        );
      }
    },
    83282: (e, t, i) => {
      i.d(t, { Ln: () => T, S0: () => y });
      var o = i(57147),
        a = i.n(o),
        n = i(23352),
        r = i(13382),
        l = i(96829),
        d = i(63477),
        c = i.n(d),
        s = i(54856),
        u = i(90435),
        h = i(18621),
        p = i(67657),
        m = i(87141),
        g = i(16794),
        C = i(84374),
        v = i(65389),
        b = i(72623),
        f = i(46016);
      const w = (0, n.ZP)("core:printer");
      async function y() {
        I();
      }
      async function T() {
        const { selection: e } = (0, C.nZ)();
        I(e.value.modelIds[0]), (0, h.L9)({ eventAction: "printBranch" });
      }
      async function I(e) {
        (0, f.$)().isOutlinerMode
          ? await (async function () {
              const e =
                  c().parse(window.location.search.slice(1)).editorId || "",
                { result: t } = await u.ZP.fetch(s.Fx, {
                  name: "dialog-print",
                  parentId: window.id,
                  wait: !0,
                  query: { editorId: e },
                });
              if (t && "finish" === t.action) {
                const e = await (0, b.J)(t.settings);
                e &&
                  E(t.settings, () =>
                    setTimeout(() => {
                      e(), (0, m.Rg)().addRateMasValue(10);
                    }, 500)
                  );
              }
            })()
          : await (async function (e) {
              var t, i;
              const o =
                  c().parse(window.location.search.slice(1)).editorId || "",
                {
                  sheets: a,
                  activeSheetId: n,
                  activeSheetFigure: r,
                } = (0, C.nZ)(),
                d =
                  null ===
                    (i =
                      null === (t = r.value) || void 0 === t
                        ? void 0
                        : t.modelAttributes) || void 0 === i
                    ? void 0
                    : i.scopeTopicId,
                h = (e = null != e ? e : d),
                p = a.value.map((e) => e.id),
                b = p.findIndex((e) => e === n.value),
                f = (0, v.dF)(n.value),
                w = (0, l.hb)(),
                y = u.ZP.route(
                  (0, s.vN)(w),
                  ({
                    sheetId: e,
                    opaqueBackground: t,
                    monochrome: i,
                    hasWatermark: o,
                  }) =>
                    k(e, {
                      padding: { left: 50, top: 50, right: 50, bottom: 50 },
                      scopeTopicId: h,
                      opaqueBackground: t,
                      monochrome: i,
                      hasWatermark: o,
                    }).then((e) => ({
                      data: e.data.outerHTML,
                      height: e.height,
                      width: e.width,
                    }))
                ),
                { result: T } = await u.ZP.fetch(s.Fx, {
                  name: "dialog-print",
                  parentId: window.id,
                  wait: !0,
                  query: {
                    backgroundColor: f,
                    currentSheetEditorIndex: b,
                    editorId: o,
                    routeId: w,
                    targetSheetId: p,
                    isPrintBranch: !!e,
                  },
                });
              if ((y && y(), !T || "finish" !== T.action)) return;
              const I = T.settings,
                x = I.pageSetup.background;
              Object.assign(I, { withFooter: !0, boundaryFillNone: !0 });
              const S = {};
              if ("currentMap" === I.content) {
                let t = await k(n.value, {
                  scopeTopicId: e,
                  opaqueBackground: x,
                  monochrome: I.monochrome,
                  padding: {
                    left: 50,
                    top: 50,
                    right: 50,
                    bottom: I.hasWatermark ? 120 : 50,
                  },
                  hasWatermark: I.hasWatermark,
                });
                if (I.hasWatermark) {
                  const i = M(I, n.value, t);
                  t = await k(n.value, {
                    scopeTopicId: e,
                    opaqueBackground: x,
                    monochrome: I.monochrome,
                    padding: {
                      left: 50,
                      top: 50 + i,
                      right: 50,
                      bottom: 120 + i,
                    },
                    hasWatermark: !0,
                  });
                }
                S[n.value] = t;
              } else if ("workbook" === I.content) {
                const e = a.value.map(async (e) => {
                  const t = e.id;
                  let i = await k(t, {
                    opaqueBackground: x,
                    monochrome: I.monochrome,
                    padding: {
                      left: 50,
                      top: 50,
                      right: 50,
                      bottom: I.hasWatermark ? 120 : 50,
                    },
                    hasWatermark: I.hasWatermark,
                  });
                  if (I.hasWatermark) {
                    const e = M(I, t, i);
                    i = await k(t, {
                      opaqueBackground: x,
                      monochrome: I.monochrome,
                      padding: {
                        left: 50,
                        top: 50 + e,
                        right: 50,
                        bottom: 120 + e,
                      },
                      hasWatermark: !0,
                    });
                  }
                  S[t] = i;
                });
                await Promise.all(e);
              }
              const H = await (0, g.k6)(I, S);
              H &&
                E(I, () => {
                  setTimeout(() => {
                    H.clean(), (0, m.Rg)().addRateMasValue(10);
                  }, 500);
                });
            })(e);
      }
      const k = async (e, t) => {
          let i;
          Object.assign(t, { disableEmbedFonts: !0 });
          const { getSheetViewer: o, sheets: a } = (0, C.nZ)(),
            n = o(e),
            r = a.value.find((t) => t.id === e);
          i = t.monochrome
            ? await n.exportSVGElementWithSizeUsingSheetAppearance(
                r,
                C.QS.GrayScale,
                t
              )
            : await n.exportSVGElementWithSize(t);
          const { size: l, svg: d } = i;
          return { data: d, width: l.width, height: l.height, scale: 1 };
        },
        M = (e, t, i) => {
          const { pageSize: o } = (0, g.UM)(e, t),
            a = Math.min(o.x / i.width, o.y / i.height);
          return (o.y - i.height * a) / 2 / a;
        };
      const E = async (e, t) => {
          const i = x(),
            o = (0, m.JE)().T;
          if (e.useSelectedPrinter && !e.saveAsPdf && i.length > 0) {
            const i = {
              silent: !0,
              pageSize: {
                width: 1e3 * e.pageSize.x,
                height: 1e3 * e.pageSize.y,
              },
              printBackground: !0,
              landscape: "landscape" == e.orientation,
              deviceName: e.selectedPrinter.name,
              copies: parseInt(e.copies),
            };
            (0, p.getCurrentWebContents)().print(i, (e, i) => {
              e || w.error((0, l.SC)(i)), t && t();
            });
          } else if (!e.useSelectedPrinter && e.saveAsPdf) {
            const i = await (0, r.ZZ)({
              title: o("Save"),
              suggestPath: e.suggestPath,
              filters: [{ name: "PDF", extensions: ["pdf"] }],
            });
            if (i) {
              const t = {
                  pageSize: {
                    width: e.pageSize.x / 25.4,
                    height: e.pageSize.y / 25.4,
                  },
                  printBackground: !0,
                  landscape: "landscape" == e.orientation,
                },
                o = await (0, p.getCurrentWebContents)().printToPDF(t);
              a().writeFile(i, o, (e) => {
                if (e) return w.debug("[Print to PDF]: ", e);
              });
            }
            t && t();
          } else
            (0, p.getCurrentWebContents)().print(
              { silent: !1, printBackground: !0 },
              () => {
                t && t();
              }
            );
        },
        x = () =>
          (0, p.getCurrentWebContents)()
            .getPrinters()
            .map((e) => ({
              name: e.name,
              displayName: e.displayName,
              description: e.description,
            }));
    },
    77995: (e, t, i) => {
      i.d(t, { H: () => l });
      var o = i(54856),
        a = i(90435),
        n = i(84374),
        r = i(46016);
      async function l() {
        var e;
        const {
            syncedProperties: t,
            executePropertyAction: i,
            createXapUrlByArrayBuffer: l,
          } = (0, n.nZ)(),
          d = (0, r.$)(),
          c = d.hyperLinkAutoFillOpt,
          s = null === (e = t.value) || void 0 === e ? void 0 : e.webLink;
        (0, r.$)().setDialogEditorVisible(!0);
        const { result: u } = await a.ZP.fetch(o.Fx, {
          name: "dialog-hyperlink",
          parentId: window.id,
          wait: !0,
          query: {
            topicHref: (null == s ? void 0 : s.value) ? s.value.href : "",
            userAutoFillOpt: c || "",
          },
        });
        if (((0, r.$)().setDialogEditorVisible(!1), !u)) return;
        const {
          action: h,
          webUrl: p,
          webTitle: m,
          thumbnail: g,
          isVideoUrl: C,
          embedUrl: v,
          autoFillOpt: b,
        } = u;
        if ("remove" === h) i({ name: "mutateProperty:webLink" });
        else if ("set" === h) {
          d.changeHyperLinkAutoFillOpt(b);
          const e = ("all" === b || "title" === b) && m;
          let t = null;
          ("all" === b || "thumbnail" === b) &&
            C &&
            g &&
            (t = await l(g, ".png")),
            i({
              name: "mutateProperty:webLink",
              payload: {
                href: p,
                title: e ? m : null,
                videoThumbnail: t,
                videoEmbedUrl: v,
              },
            });
        }
      }
    },
    65389: (e, t, i) => {
      i.d(t, { dF: () => c, CG: () => s });
      var o = i(84374);
      i(60746);
      var a = i(87141),
        n = i(91878);
      const r = {
          "print-watermark-dark-small":
            '<svg width="134" height="12" viewBox="0 0 134 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.22951 1.7004C4.88374 1.7004 5.46313 1.82634 5.9677 2.07822C6.47654 2.3301 6.86993 2.68362 7.14787 3.13877C7.43008 3.58951 7.57119 4.10874 7.57119 4.69646C7.57119 5.2886 7.43222 5.81445 7.15428 6.27402C6.87634 6.7336 6.48723 7.09153 5.98694 7.34783C5.49093 7.59971 4.92008 7.72565 4.27441 7.72565H2.13856V11.2652H1.0097V1.7004H4.22951ZM4.24234 6.7115C4.67422 6.7115 5.05692 6.62975 5.39044 6.46625C5.72397 6.29833 5.98266 6.06633 6.16653 5.77026C6.35467 5.47419 6.44875 5.13835 6.44875 4.76274C6.44875 4.36503 6.3504 4.01152 6.1537 3.70219C5.96129 3.38845 5.68976 3.1454 5.33913 2.97306C4.99278 2.79631 4.59511 2.70793 4.14613 2.70793H2.15139V6.7115H4.24234Z" fill="black" fill-opacity="0.2"/><path d="M10.3164 5.35267C10.5259 4.95938 10.8188 4.64564 11.1951 4.41143C11.5756 4.17281 12.0524 4.05129 12.6254 4.04687V5.07428C11.7488 5.0787 11.1416 5.29302 10.8038 5.71724C10.466 6.13704 10.295 6.66289 10.2907 7.2948V11.2652H9.20034V4.17281H10.2907V5.35267H10.3164Z" fill="black" fill-opacity="0.2"/><path d="M16.9612 11.3978C16.2044 11.3978 15.5566 11.2498 15.0178 10.9537C14.479 10.6576 14.0685 10.2312 13.7863 9.67441C13.5041 9.11762 13.363 8.45257 13.363 7.67925C13.363 6.95013 13.4977 6.31159 13.7671 5.76363C14.0407 5.21568 14.4213 4.79367 14.9088 4.4976C15.4005 4.19711 15.9671 4.04687 16.6085 4.04687C17.1986 4.04687 17.7288 4.18386 18.1991 4.45783C18.6738 4.73181 19.05 5.11847 19.328 5.61781C19.6059 6.11273 19.7534 6.68499 19.7706 7.33457V7.54006C19.7706 7.75217 19.7641 7.95765 19.7513 8.1565H14.5175C14.5261 8.88563 14.7506 9.44242 15.191 9.82687C15.6357 10.2069 16.2471 10.3969 17.0254 10.3969C17.3675 10.3969 17.7224 10.3483 18.0901 10.2511C18.4578 10.1539 18.802 10.0103 19.1227 9.82024L19.3216 10.7084C18.616 11.168 17.8293 11.3978 16.9612 11.3978ZM18.6353 7.25503C18.6353 6.82639 18.5498 6.44415 18.3787 6.10831C18.2077 5.77247 17.9704 5.51175 17.6668 5.32616C17.3675 5.13614 17.0275 5.04114 16.6469 5.04114C16.2536 5.04114 15.8965 5.13614 15.5758 5.32616C15.2551 5.51175 14.9986 5.77468 14.8061 6.11494C14.618 6.45078 14.5197 6.83081 14.5111 7.25503H18.6353Z" fill="black" fill-opacity="0.2"/><path d="M23.5869 11.3978C23.1037 11.3978 22.6141 11.3116 22.1181 11.1393C21.6263 10.967 21.1773 10.7305 20.7711 10.4301L21.1175 9.56836C21.5151 9.83349 21.9256 10.0368 22.349 10.1782C22.7723 10.3152 23.1657 10.3881 23.5291 10.3969C23.9738 10.4013 24.3266 10.3174 24.5874 10.145C24.8525 9.97269 24.9851 9.72081 24.9851 9.38939C24.9851 9.17286 24.9252 8.98726 24.8055 8.8326C24.6901 8.67794 24.5062 8.54095 24.2539 8.42164C24.0059 8.30233 23.6702 8.18743 23.2469 8.07696C22.5328 7.88694 22.0069 7.62181 21.6691 7.28155C21.3356 6.93687 21.1688 6.50823 21.1688 5.99563C21.1688 5.6156 21.2629 5.27755 21.451 4.98148C21.6434 4.68541 21.9107 4.45562 22.2528 4.29212C22.5991 4.12862 22.9946 4.04687 23.4393 4.04687C23.837 4.04687 24.2368 4.10432 24.6387 4.21921C25.0407 4.32968 25.4127 4.48214 25.7548 4.67657L25.5688 5.60455C24.8461 5.22452 24.1834 5.03451 23.5804 5.03451C23.1956 5.03451 22.8792 5.12068 22.6312 5.29302C22.3832 5.46094 22.2592 5.6863 22.2592 5.96912C22.2592 6.17239 22.3148 6.34694 22.4259 6.49276C22.5371 6.63417 22.7124 6.76453 22.9519 6.88384C23.1913 6.99873 23.5142 7.11363 23.9204 7.22852C24.6687 7.43621 25.2139 7.69914 25.5559 8.0173C25.9023 8.33105 26.0755 8.75085 26.0755 9.27671C26.0755 9.70535 25.9771 10.0787 25.7804 10.3969C25.5837 10.7151 25.2972 10.9625 24.921 11.1393C24.549 11.3116 24.1043 11.3978 23.5869 11.3978Z" fill="black" fill-opacity="0.2"/><path d="M30.6999 11.3978C29.9431 11.3978 29.2953 11.2498 28.7565 10.9537C28.2177 10.6576 27.8072 10.2312 27.525 9.67441C27.2428 9.11762 27.1017 8.45257 27.1017 7.67925C27.1017 6.95013 27.2364 6.31159 27.5058 5.76363C27.7795 5.21568 28.16 4.79367 28.6475 4.4976C29.1392 4.19711 29.7058 4.04687 30.3472 4.04687C30.9373 4.04687 31.4675 4.18386 31.9378 4.45783C32.4125 4.73181 32.7888 5.11847 33.0667 5.61781C33.3446 6.11273 33.4922 6.68499 33.5093 7.33457V7.54006C33.5093 7.75217 33.5028 7.95765 33.49 8.1565H28.2562C28.2648 8.88563 28.4893 9.44242 28.9297 9.82687C29.3744 10.2069 29.9859 10.3969 30.7641 10.3969C31.1062 10.3969 31.4611 10.3483 31.8288 10.2511C32.1965 10.1539 32.5408 10.0103 32.8615 9.82024L33.0603 10.7084C32.3547 11.168 31.568 11.3978 30.6999 11.3978ZM32.374 7.25503C32.374 6.82639 32.2885 6.44415 32.1174 6.10831C31.9464 5.77247 31.7091 5.51175 31.4055 5.32616C31.1062 5.13614 30.7662 5.04114 30.3857 5.04114C29.9923 5.04114 29.6352 5.13614 29.3145 5.32616C28.9938 5.51175 28.7373 5.77468 28.5449 6.11494C28.3567 6.45078 28.2584 6.83081 28.2498 7.25503H32.374Z" fill="black" fill-opacity="0.2"/><path d="M40.757 11.2652H39.6603V7.11584C39.6603 6.41764 39.5085 5.89399 39.2049 5.5449C38.9013 5.1958 38.4566 5.02125 37.8708 5.02125C37.5415 5.02125 37.2422 5.12068 36.9728 5.31953C36.7077 5.51396 36.4982 5.7791 36.3442 6.11494C36.1946 6.45078 36.1197 6.81535 36.1197 7.20863V11.2652H35.023V4.17281H36.1197V5.39907H36.1775C36.3528 4.97485 36.6243 4.64343 36.992 4.40481C37.3598 4.16618 37.766 4.04687 38.2107 4.04687C39.036 4.04687 39.6667 4.28991 40.1028 4.776C40.539 5.26208 40.757 5.96028 40.757 6.87058V11.2652Z" fill="black" fill-opacity="0.2"/><path d="M45.7535 11.1393C45.6124 11.1791 45.4478 11.21 45.2596 11.2321C45.0758 11.2542 44.9154 11.2652 44.7786 11.2652H44.7722C43.7032 11.2652 43.1687 10.7018 43.1687 9.57499V5.28639H42.0719V4.29212H43.1687V2.59524L44.2591 2.19754V4.29212H45.7022V5.28639H44.2591V9.38276C44.2591 9.61255 44.2826 9.79151 44.3296 9.91966C44.3809 10.0434 44.4558 10.1318 44.5541 10.1848C44.6525 10.2334 44.7893 10.2621 44.9646 10.271C45.2939 10.2621 45.5568 10.2312 45.7535 10.1782V11.1393Z" fill="black" fill-opacity="0.2"/><path d="M50.3523 11.3978C49.5955 11.3978 48.9477 11.2498 48.4089 10.9537C47.8701 10.6576 47.4596 10.2312 47.1774 9.67441C46.8952 9.11762 46.7541 8.45257 46.7541 7.67925C46.7541 6.95013 46.8888 6.31159 47.1582 5.76363C47.4318 5.21568 47.8124 4.79367 48.2999 4.4976C48.7916 4.19711 49.3582 4.04687 49.9996 4.04687C50.5896 4.04687 51.1199 4.18386 51.5902 4.45783C52.0649 4.73181 52.4411 5.11847 52.7191 5.61781C52.997 6.11273 53.1445 6.68499 53.1616 7.33457V7.54006C53.1616 7.75217 53.1552 7.95765 53.1424 8.1565H47.9086C47.9172 8.88563 48.1417 9.44242 48.5821 9.82687C49.0268 10.2069 49.6382 10.3969 50.4165 10.3969C50.7585 10.3969 51.1135 10.3483 51.4812 10.2511C51.8489 10.1539 52.1931 10.0103 52.5138 9.82024L52.7127 10.7084C52.0071 11.168 51.2204 11.3978 50.3523 11.3978ZM52.0264 7.25503C52.0264 6.82639 51.9409 6.44415 51.7698 6.10831C51.5988 5.77247 51.3615 5.51175 51.0579 5.32616C50.7585 5.13614 50.4186 5.04114 50.038 5.04114C49.6447 5.04114 49.2876 5.13614 48.9669 5.32616C48.6462 5.51175 48.3897 5.77468 48.1972 6.11494C48.0091 6.45078 47.9107 6.83081 47.9022 7.25503H52.0264Z" fill="black" fill-opacity="0.2"/><path d="M59.6462 1.50818H60.7365V11.2586H59.6462V10.0456H59.5949C59.3768 10.4477 59.0732 10.7725 58.6841 11.02C58.295 11.2674 57.8332 11.3912 57.2987 11.3912C56.7342 11.3912 56.2254 11.2409 55.7721 10.9404C55.3189 10.64 54.964 10.2224 54.7074 9.68767C54.4509 9.14856 54.3226 8.53432 54.3226 7.84496C54.3226 7.107 54.453 6.45078 54.7138 5.87632C54.9747 5.29743 55.3338 4.84891 55.7914 4.53075C56.2489 4.20816 56.762 4.04687 57.3307 4.04687C57.831 4.04687 58.28 4.17281 58.6777 4.42469C59.0753 4.67657 59.3853 5.02567 59.6077 5.47198H59.6462V1.50818ZM57.4911 10.5229C57.9315 10.5229 58.3142 10.4035 58.6392 10.1649C58.9641 9.92629 59.2122 9.61918 59.3832 9.24356C59.5585 8.86353 59.6462 8.46583 59.6462 8.05045V7.63948C59.6419 7.14898 59.5457 6.70045 59.3575 6.29391C59.1737 5.88295 58.9214 5.55815 58.6007 5.31953C58.28 5.08091 57.9229 4.96159 57.5296 4.96159C57.1447 4.96159 56.792 5.08533 56.4713 5.33279C56.1506 5.57583 55.894 5.91609 55.7016 6.35357C55.5134 6.79104 55.4194 7.28818 55.4194 7.84496C55.4194 8.36198 55.5113 8.82376 55.6952 9.23031C55.8833 9.63685 56.1356 9.95502 56.452 10.1848C56.7684 10.4102 57.1148 10.5229 57.4911 10.5229Z" fill="black" fill-opacity="0.2"/><path d="M72.6088 10.0986L74.3855 4.17281H75.4951L73.3528 11.2586L71.9546 11.2652L70.8963 8.04382L69.5365 11.2652H68.3627L65.7458 4.17281H66.8747L69.0041 10.0986H69.0555L70.4665 6.73802L69.6199 4.16618H70.6718L72.5575 10.0986H72.6088Z" fill="black" fill-opacity="0.2"/><path d="M77.8554 2.68804H76.6496V1.44189H77.8554V2.68804ZM77.8041 11.2652H76.7073V4.17281H77.8041V11.2652Z" fill="black" fill-opacity="0.2"/><path d="M82.916 11.1393C82.7749 11.1791 82.6103 11.21 82.4222 11.2321C82.2383 11.2542 82.0779 11.2652 81.9411 11.2652H81.9347C80.8657 11.2652 80.3312 10.7018 80.3312 9.57499V5.28639H79.2344V4.29212H80.3312V2.59524L81.4216 2.19754V4.29212H82.8647V5.28639H81.4216V9.38276C81.4216 9.61255 81.4451 9.79151 81.4921 9.91966C81.5434 10.0434 81.6183 10.1318 81.7166 10.1848C81.815 10.2334 81.9518 10.2621 82.1271 10.271C82.4564 10.2621 82.7193 10.2312 82.916 10.1782V11.1393Z" fill="black" fill-opacity="0.2"/><path d="M90.0035 11.2652H88.9067V7.11584C88.9067 6.42206 88.7549 5.90062 88.4513 5.55153C88.152 5.19801 87.7137 5.02125 87.1364 5.02125C86.82 5.02125 86.5314 5.10963 86.2705 5.28639C86.0097 5.46315 85.8002 5.70398 85.642 6.00889C85.4838 6.3138 85.3918 6.64964 85.3662 7.01641V11.2652H84.2694V1.50818H85.3662V5.42558H85.4111C85.5864 4.99253 85.8579 4.65448 86.2256 4.41143C86.5934 4.16839 86.9996 4.04687 87.4443 4.04687C88.2738 4.04687 88.9067 4.28991 89.3428 4.776C89.7832 5.26208 90.0035 5.96028 90.0035 6.87058V11.2652Z" fill="black" fill-opacity="0.2"/><path d="M101.676 4.06481L99.6395 7.37712L101.689 11.1238H99.4031L98.0107 8.65318L96.5263 11.1238H94.2407L96.395 7.37712L94.2932 4.06481H96.5526L98.0238 6.42687L99.3637 4.06481H101.676Z" fill="black" fill-opacity="0.2"/><path d="M102.745 4.06481V11.1238H104.821V7.3907V7.1735C104.821 6.41329 105.372 5.74812 106.003 5.74812C106.686 5.74812 107.132 6.26397 107.132 7.0649V11.1238H109.208V7.1735C109.208 6.41329 109.72 5.74812 110.324 5.74812C111.034 5.74812 111.494 6.26397 111.494 7.0649V11.1238H113.569V7.03775C113.569 5.88387 113.293 3.79331 110.955 3.79331C109.865 3.79331 109.129 4.34989 108.788 5.00149C108.367 4.21414 107.618 3.79331 106.594 3.79331C105.661 3.79331 105.031 4.18699 104.715 4.74356L104.361 4.06481H102.745Z" fill="black" fill-opacity="0.2"/><path d="M114.644 4.06481V11.1238H116.719V4.06481H114.644ZM114.368 1.87923C114.368 2.62586 114.959 3.23674 115.694 3.23674C116.404 3.23674 116.995 2.62586 116.995 1.87923C116.995 1.14618 116.404 0.521729 115.694 0.521729C114.959 0.521729 114.368 1.14618 114.368 1.87923Z" fill="black" fill-opacity="0.2"/><path d="M117.921 4.06481V11.1238H119.996V7.1735C119.996 6.41329 120.548 5.74812 121.178 5.74812C121.901 5.74812 122.308 6.22324 122.308 7.0649V11.1238H124.383V6.96987C124.383 4.92004 123.451 3.79331 121.769 3.79331C120.837 3.79331 120.206 4.18699 119.891 4.74356L119.536 4.06481H117.921Z" fill="black" fill-opacity="0.2"/><path d="M128.679 11.2732C129.494 11.2732 130.255 10.9745 130.847 10.4587L131.214 11.1238H132.778V1.97426L130.702 1.24121V4.48564C130.124 4.05124 129.428 3.79331 128.679 3.79331C126.735 3.79331 125.172 5.46304 125.172 7.54002C125.172 9.60343 126.735 11.2732 128.679 11.2732ZM127.234 7.4993C127.234 6.49474 128.009 5.68024 128.994 5.68024C129.98 5.68024 130.768 6.49474 130.768 7.4993C130.768 8.531 129.98 9.33193 128.994 9.33193C128.009 9.33193 127.234 8.531 127.234 7.4993Z" fill="black" fill-opacity="0.2"/></svg>',
          "print-watermark-dark-normal":
            '<svg width="201" height="18" viewBox="0 0 201 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.34427 2.55061C7.32561 2.55061 8.1947 2.73952 8.95155 3.11734C9.71481 3.49516 10.3049 4.02543 10.7218 4.70816C11.1451 5.38426 11.3568 6.1631 11.3568 7.04468C11.3568 7.9329 11.1483 8.72168 10.7314 9.41104C10.3145 10.1004 9.73084 10.6373 8.98041 11.0217C8.23639 11.3996 7.38013 11.5885 6.41162 11.5885H3.20784V16.8979H1.51456V2.55061H6.34427ZM6.36351 10.0673C7.01132 10.0673 7.58537 9.94463 8.08566 9.69937C8.58595 9.44749 8.974 9.0995 9.2498 8.65539C9.53201 8.21129 9.67312 7.70753 9.67312 7.14411C9.67312 6.54755 9.5256 6.01728 9.23056 5.55329C8.94193 5.08267 8.53464 4.7181 8.0087 4.45959C7.48916 4.19446 6.89267 4.06189 6.2192 4.06189H3.22709V10.0673H6.36351Z" fill="black" fill-opacity="0.2"/><path d="M15.4745 8.02901C15.7888 7.43908 16.2282 6.96846 16.7926 6.61715C17.3635 6.25922 18.0786 6.07693 18.9381 6.0703V7.61142C17.6232 7.61804 16.7124 7.93952 16.2057 8.57585C15.699 9.20556 15.4425 9.99434 15.4361 10.9422V16.8979H13.8005V6.25922H15.4361V8.02901H15.4745Z" fill="black" fill-opacity="0.2"/><path d="M25.4418 17.0967C24.3066 17.0967 23.3349 16.8747 22.5267 16.4306C21.7185 15.9864 21.1028 15.3468 20.6795 14.5116C20.2562 13.6764 20.0445 12.6789 20.0445 11.5189C20.0445 10.4252 20.2465 9.46738 20.6506 8.64545C21.0611 7.82353 21.632 7.19051 22.3631 6.74641C23.1008 6.29567 23.9506 6.0703 24.9127 6.0703C25.7978 6.0703 26.5932 6.27579 27.2987 6.68675C28.0106 7.09771 28.5751 7.6777 28.992 8.42671C29.4089 9.1691 29.6302 10.0275 29.6558 11.0019V11.3101C29.6558 11.6282 29.6462 11.9365 29.627 12.2348H21.7763C21.7891 13.3284 22.1258 14.1636 22.7865 14.7403C23.4535 15.3103 24.3707 15.5954 25.5381 15.5954C26.0512 15.5954 26.5835 15.5225 27.1351 15.3766C27.6867 15.2308 28.2031 15.0154 28.6841 14.7304L28.9824 16.0627C27.9241 16.752 26.7439 17.0967 25.4418 17.0967ZM27.9529 10.8825C27.9529 10.2396 27.8246 9.66623 27.5681 9.16247C27.3115 8.65871 26.9555 8.26763 26.5002 7.98924C26.0512 7.70421 25.5413 7.5617 24.9704 7.5617C24.3803 7.5617 23.8448 7.70421 23.3637 7.98924C22.8827 8.26763 22.4978 8.66202 22.2092 9.17241C21.927 9.67617 21.7795 10.2462 21.7666 10.8825H27.9529Z" fill="black" fill-opacity="0.2"/><path d="M35.3803 17.0967C34.6555 17.0967 33.9211 16.9675 33.1771 16.7089C32.4395 16.4504 31.766 16.0958 31.1567 15.6451L31.6762 14.3525C32.2727 14.7502 32.8885 15.0551 33.5234 15.2673C34.1584 15.4727 34.7485 15.5821 35.2937 15.5954C35.9608 15.602 36.4899 15.4761 36.8812 15.2175C37.2788 14.959 37.4777 14.5812 37.4777 14.0841C37.4777 13.7593 37.3879 13.4809 37.2083 13.2489C37.0351 13.0169 36.7593 12.8114 36.3809 12.6325C36.0089 12.4535 35.5054 12.2811 34.8704 12.1154C33.7992 11.8304 33.0103 11.4327 32.5036 10.9223C32.0033 10.4053 31.7532 9.76234 31.7532 8.99345C31.7532 8.4234 31.8943 7.91632 32.1765 7.47222C32.4651 7.02811 32.866 6.68344 33.3791 6.43818C33.8987 6.19293 34.492 6.0703 35.159 6.0703C35.7555 6.0703 36.3552 6.15647 36.9581 6.32881C37.561 6.49452 38.119 6.72321 38.6322 7.01486L38.3532 8.40683C37.2692 7.83678 36.275 7.55176 35.3707 7.55176C34.7934 7.55176 34.3188 7.68101 33.9468 7.93952C33.5748 8.1914 33.3888 8.52945 33.3888 8.95367C33.3888 9.25858 33.4721 9.52041 33.6389 9.73914C33.8057 9.95125 34.0686 10.1468 34.4278 10.3258C34.787 10.4981 35.2712 10.6704 35.8806 10.8428C37.003 11.1543 37.8208 11.5487 38.3339 12.026C38.8534 12.4966 39.1132 13.1263 39.1132 13.9151C39.1132 14.558 38.9657 15.1181 38.6707 15.5954C38.3756 16.0726 37.9459 16.4438 37.3814 16.7089C36.8234 16.9675 36.1564 17.0967 35.3803 17.0967Z" fill="black" fill-opacity="0.2"/><path d="M46.0499 17.0967C44.9146 17.0967 43.9429 16.8747 43.1348 16.4306C42.3266 15.9864 41.7109 15.3468 41.2875 14.5116C40.8642 13.6764 40.6526 12.6789 40.6526 11.5189C40.6526 10.4252 40.8546 9.46738 41.2587 8.64545C41.6692 7.82353 42.24 7.19051 42.9712 6.74641C43.7088 6.29567 44.5587 6.0703 45.5208 6.0703C46.4059 6.0703 47.2012 6.27579 47.9068 6.68675C48.6187 7.09771 49.1831 7.6777 49.6 8.42671C50.017 9.1691 50.2382 10.0275 50.2639 11.0019V11.3101C50.2639 11.6282 50.2543 11.9365 50.235 12.2348H42.3843C42.3972 13.3284 42.7339 14.1636 43.3945 14.7403C44.0616 15.3103 44.9788 15.5954 46.1461 15.5954C46.6592 15.5954 47.1916 15.5225 47.7432 15.3766C48.2948 15.2308 48.8111 15.0154 49.2922 14.7304L49.5904 16.0627C48.5321 16.752 47.352 17.0967 46.0499 17.0967ZM48.561 10.8825C48.561 10.2396 48.4327 9.66623 48.1761 9.16247C47.9196 8.65871 47.5636 8.26763 47.1082 7.98924C46.6592 7.70421 46.1493 7.5617 45.5785 7.5617C44.9884 7.5617 44.4528 7.70421 43.9718 7.98924C43.4907 8.26763 43.1059 8.66202 42.8173 9.17241C42.5351 9.67617 42.3875 10.2462 42.3747 10.8825H48.561Z" fill="black" fill-opacity="0.2"/><path d="M61.1356 16.8979H59.4904V10.6738C59.4904 9.62646 59.2627 8.84099 58.8073 8.31734C58.3519 7.7937 57.6848 7.53187 56.8061 7.53187C56.3123 7.53187 55.8633 7.68101 55.4592 7.97929C55.0615 8.27095 54.7473 8.66865 54.5163 9.17241C54.2919 9.67617 54.1796 10.223 54.1796 10.813V16.8979H52.5344V6.25922H54.1796V8.09861H54.2662C54.5292 7.46228 54.9365 6.96514 55.4881 6.60721C56.0397 6.24927 56.649 6.0703 57.316 6.0703C58.5539 6.0703 59.5 6.43487 60.1542 7.164C60.8084 7.89312 61.1356 8.94042 61.1356 10.3059V16.8979Z" fill="black" fill-opacity="0.2"/><path d="M68.6303 16.7089C68.4186 16.7686 68.1717 16.815 67.8895 16.8481C67.6137 16.8813 67.3731 16.8979 67.1679 16.8979H67.1583C65.5548 16.8979 64.753 16.0527 64.753 14.3625V7.92958H63.1079V6.43818H64.753V3.89286L66.3886 3.2963V6.43818H68.5533V7.92958H66.3886V14.0741C66.3886 14.4188 66.4239 14.6873 66.4944 14.8795C66.5714 15.0651 66.6836 15.1977 66.8312 15.2772C66.9787 15.3501 67.1839 15.3932 67.4469 15.4065C67.9408 15.3932 68.3352 15.3468 68.6303 15.2673V16.7089Z" fill="black" fill-opacity="0.2"/><path d="M75.5285 17.0967C74.3932 17.0967 73.4215 16.8747 72.6133 16.4306C71.8052 15.9864 71.1894 15.3468 70.7661 14.5116C70.3428 13.6764 70.1311 12.6789 70.1311 11.5189C70.1311 10.4252 70.3332 9.46738 70.7373 8.64545C71.1478 7.82353 71.7186 7.19051 72.4498 6.74641C73.1874 6.29567 74.0372 6.0703 74.9993 6.0703C75.8845 6.0703 76.6798 6.27579 77.3853 6.68675C78.0973 7.09771 78.6617 7.6777 79.0786 8.42671C79.4955 9.1691 79.7168 10.0275 79.7425 11.0019V11.3101C79.7425 11.6282 79.7328 11.9365 79.7136 12.2348H71.8629C71.8757 13.3284 72.2125 14.1636 72.8731 14.7403C73.5402 15.3103 74.4574 15.5954 75.6247 15.5954C76.1378 15.5954 76.6702 15.5225 77.2218 15.3766C77.7734 15.2308 78.2897 15.0154 78.7708 14.7304L79.069 16.0627C78.0107 16.752 76.8305 17.0967 75.5285 17.0967ZM78.0396 10.8825C78.0396 10.2396 77.9113 9.66623 77.6547 9.16247C77.3982 8.65871 77.0422 8.26763 76.5868 7.98924C76.1378 7.70421 75.6279 7.5617 75.0571 7.5617C74.467 7.5617 73.9314 7.70421 73.4504 7.98924C72.9693 8.26763 72.5845 8.66202 72.2959 9.17241C72.0136 9.67617 71.8661 10.2462 71.8533 10.8825H78.0396Z" fill="black" fill-opacity="0.2"/><path d="M89.4692 2.26227H91.1048V16.8879H89.4692V15.0684H89.3923C89.0652 15.6716 88.6098 16.1588 88.0261 16.53C87.4424 16.9012 86.7497 17.0868 85.948 17.0868C85.1013 17.0868 84.3381 16.8614 83.6582 16.4107C82.9783 15.9599 82.446 15.3335 82.0611 14.5315C81.6763 13.7228 81.4839 12.8015 81.4839 11.7674C81.4839 10.6605 81.6795 9.67617 82.0707 8.81448C82.462 7.94615 83.0008 7.27337 83.6871 6.79612C84.3734 6.31224 85.143 6.0703 85.9961 6.0703C86.7465 6.0703 87.42 6.25922 88.0165 6.63704C88.613 7.01486 89.078 7.5385 89.4115 8.20798H89.4692V2.26227ZM86.2366 15.7843C86.8972 15.7843 87.4713 15.6053 87.9588 15.2474C88.4462 14.8894 88.8182 14.4288 89.0748 13.8653C89.3378 13.2953 89.4692 12.6987 89.4692 12.0757V11.4592C89.4628 10.7235 89.3185 10.0507 89.0363 9.44086C88.7605 8.82442 88.3821 8.33723 87.901 7.97929C87.42 7.62136 86.8844 7.44239 86.2943 7.44239C85.7171 7.44239 85.1879 7.62799 84.7069 7.99918C84.2258 8.36374 83.841 8.87413 83.5524 9.53035C83.2702 10.1866 83.129 10.9323 83.129 11.7674C83.129 12.543 83.2669 13.2356 83.5427 13.8455C83.825 14.4553 84.2034 14.9325 84.678 15.2772C85.1526 15.6153 85.6722 15.7843 86.2366 15.7843Z" fill="black" fill-opacity="0.2"/><path d="M108.913 15.1479L111.578 6.25922H113.243L110.029 16.8879L107.932 16.8979L106.344 12.0657L104.305 16.8979H102.544L98.6188 6.25922H100.312L103.506 15.1479H103.583L105.7 10.107L104.43 6.24927H106.008L108.836 15.1479H108.913Z" fill="black" fill-opacity="0.2"/><path d="M116.783 4.03206H114.974V2.16284H116.783V4.03206ZM116.706 16.8979H115.061V6.25922H116.706V16.8979Z" fill="black" fill-opacity="0.2"/><path d="M124.374 16.7089C124.162 16.7686 123.915 16.815 123.633 16.8481C123.357 16.8813 123.117 16.8979 122.912 16.8979H122.902C121.299 16.8979 120.497 16.0527 120.497 14.3625V7.92958H118.852V6.43818H120.497V3.89286L122.132 3.2963V6.43818H124.297V7.92958H122.132V14.0741C122.132 14.4188 122.168 14.6873 122.238 14.8795C122.315 15.0651 122.427 15.1977 122.575 15.2772C122.722 15.3501 122.928 15.3932 123.191 15.4065C123.685 15.3932 124.079 15.3468 124.374 15.2673V16.7089Z" fill="black" fill-opacity="0.2"/><path d="M135.005 16.8979H133.36V10.6738C133.36 9.63309 133.132 8.85093 132.677 8.32729C132.228 7.79701 131.571 7.53187 130.705 7.53187C130.23 7.53187 129.797 7.66444 129.406 7.92958C129.015 8.19472 128.7 8.55597 128.463 9.01333C128.226 9.47069 128.088 9.97445 128.049 10.5246V16.8979H126.404V2.26227H128.049V8.13838H128.117C128.38 7.48879 128.787 6.98171 129.338 6.61715C129.89 6.25259 130.499 6.0703 131.166 6.0703C132.411 6.0703 133.36 6.43487 134.014 7.164C134.675 7.89312 135.005 8.94042 135.005 10.3059V16.8979Z" fill="black" fill-opacity="0.2"/><path d="M152.513 6.09722L149.459 11.0657L152.533 16.6857H149.105L147.016 12.9798L144.789 16.6857H141.361L144.592 11.0657L141.44 6.09722H144.829L147.036 9.6403L149.045 6.09722H152.513Z" fill="black" fill-opacity="0.2"/><path d="M154.118 6.09722V16.6857H157.231V11.086V10.7602C157.231 9.61994 158.058 8.62218 159.004 8.62218C160.029 8.62218 160.699 9.39595 160.699 10.5973V16.6857H163.812V10.7602C163.812 9.61994 164.58 8.62218 165.487 8.62218C166.551 8.62218 167.24 9.39595 167.24 10.5973V16.6857H170.353V10.5566C170.353 8.8258 169.94 5.68997 166.432 5.68997C164.797 5.68997 163.694 6.52483 163.181 7.50224C162.551 6.32121 161.428 5.68997 159.891 5.68997C158.492 5.68997 157.546 6.28048 157.073 7.11535L156.541 6.09722H154.118Z" fill="black" fill-opacity="0.2"/><path d="M171.965 6.09722V16.6857H175.078V6.09722H171.965ZM171.552 2.81885C171.552 3.93879 172.438 4.8551 173.542 4.8551C174.606 4.8551 175.492 3.93879 175.492 2.81885C175.492 1.71927 174.606 0.782593 173.542 0.782593C172.438 0.782593 171.552 1.71927 171.552 2.81885Z" fill="black" fill-opacity="0.2"/><path d="M176.881 6.09722V16.6857H179.994V10.7602C179.994 9.61994 180.822 8.62218 181.767 8.62218C182.851 8.62218 183.462 9.33487 183.462 10.5973V16.6857H186.575V10.4548C186.575 7.38006 185.176 5.68997 182.654 5.68997C181.255 5.68997 180.309 6.28048 179.836 7.11535L179.304 6.09722H176.881Z" fill="black" fill-opacity="0.2"/><path d="M193.019 16.9097C194.24 16.9097 195.383 16.4618 196.27 15.688L196.822 16.6857H199.166V2.96139L196.053 1.86181V6.72846C195.186 6.07686 194.142 5.68997 193.019 5.68997C190.103 5.68997 187.758 8.19456 187.758 11.31C187.758 14.4051 190.103 16.9097 193.019 16.9097ZM190.851 11.2489C190.851 9.74212 192.014 8.52036 193.492 8.52036C194.969 8.52036 196.152 9.74212 196.152 11.2489C196.152 12.7965 194.969 13.9979 193.492 13.9979C192.014 13.9979 190.851 12.7965 190.851 11.2489Z" fill="black" fill-opacity="0.2"/></svg>',
          "print-watermark-dark-big":
            '<svg width="268" height="24" viewBox="0 0 268 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.45903 3.40087C9.76748 3.40087 10.9263 3.65275 11.9354 4.15651C12.9531 4.66027 13.7399 5.3673 14.2957 6.27761C14.8602 7.17908 15.1424 8.21753 15.1424 9.39297C15.1424 10.5773 14.8644 11.629 14.3086 12.5481C13.7527 13.4673 12.9745 14.1831 11.9739 14.6957C10.9819 15.1995 9.84017 15.4514 8.54882 15.4514H4.27712V22.5305H2.01941V3.40087H8.45903ZM8.48469 13.4231C9.34843 13.4231 10.1138 13.2596 10.7809 12.9326C11.4479 12.5967 11.9653 12.1327 12.3331 11.5406C12.7093 10.9484 12.8975 10.2768 12.8975 9.52554C12.8975 8.73013 12.7008 8.0231 12.3074 7.40444C11.9226 6.77695 11.3795 6.29087 10.6783 5.94619C9.98555 5.59267 9.19022 5.41591 8.29227 5.41591H4.30278V13.4231H8.48469Z" fill="black" fill-opacity="0.2"/><path d="M20.6327 10.7054C21.0518 9.91883 21.6376 9.29134 22.3902 8.82293C23.1513 8.34568 24.1048 8.10264 25.2508 8.0938V10.1486C23.4976 10.1575 22.2833 10.5861 21.6077 11.4345C20.9321 12.2741 20.59 13.3258 20.5814 14.5897V22.5305H18.4007V8.34568H20.5814V10.7054H20.6327Z" fill="black" fill-opacity="0.2"/><path d="M33.9225 22.7957C32.4088 22.7957 31.1132 22.4996 30.0356 21.9075C28.9581 21.3153 28.1371 20.4625 27.5726 19.3489C27.0082 18.2353 26.726 16.9052 26.726 15.3586C26.726 13.9003 26.9954 12.6232 27.5342 11.5273C28.0815 10.4314 28.8426 9.58741 29.8175 8.99527C30.801 8.39429 31.9341 8.0938 33.2169 8.0938C34.3971 8.0938 35.4575 8.36778 36.3983 8.91573C37.3475 9.46368 38.1001 10.237 38.656 11.2357C39.2119 12.2255 39.5069 13.37 39.5411 14.6692V15.0802C39.5411 15.5044 39.5283 15.9154 39.5026 16.3131H29.035C29.0521 17.7713 29.5011 18.8849 30.382 19.6538C31.2714 20.4139 32.4943 20.7939 34.0507 20.7939C34.7349 20.7939 35.4447 20.6967 36.1802 20.5022C36.9157 20.3078 37.6041 20.0206 38.2455 19.6405L38.6431 21.417C37.2321 22.3361 35.6585 22.7957 33.9225 22.7957ZM37.2706 14.5101C37.2706 13.6528 37.0995 12.8884 36.7574 12.2167C36.4154 11.545 35.9407 11.0236 35.3335 10.6524C34.7349 10.2723 34.055 10.0823 33.2939 10.0823C32.5071 10.0823 31.793 10.2723 31.1516 10.6524C30.5102 11.0236 29.9971 11.5494 29.6123 12.2299C29.236 12.9016 29.0393 13.6617 29.0222 14.5101H37.2706Z" fill="black" fill-opacity="0.2"/><path d="M47.1737 22.7957C46.2073 22.7957 45.2281 22.6233 44.2361 22.2787C43.2526 21.934 42.3547 21.4611 41.5423 20.8602L42.235 19.1368C43.0303 19.667 43.8513 20.0736 44.6979 20.3564C45.5446 20.6304 46.3314 20.7762 47.0583 20.7939C47.9477 20.8027 48.6532 20.6348 49.1749 20.2901C49.7051 19.9454 49.9702 19.4417 49.9702 18.7788C49.9702 18.3458 49.8505 17.9746 49.611 17.6653C49.3801 17.3559 49.0124 17.082 48.5078 16.8433C48.0118 16.6047 47.3405 16.3749 46.4938 16.154C45.0657 15.7739 44.0138 15.2437 43.3382 14.5632C42.6711 13.8738 42.3376 13.0165 42.3376 11.9913C42.3376 11.2313 42.5257 10.5552 42.902 9.96302C43.2869 9.37088 43.8214 8.91131 44.5055 8.5843C45.1982 8.2573 45.9893 8.0938 46.8787 8.0938C47.674 8.0938 48.4736 8.20869 49.2775 8.43848C50.0814 8.65943 50.8254 8.96433 51.5096 9.3532L51.1375 11.2092C49.6923 10.4491 48.3667 10.0691 47.1609 10.0691C46.3912 10.0691 45.7584 10.2414 45.2624 10.5861C44.7663 10.9219 44.5183 11.3727 44.5183 11.9383C44.5183 12.3448 44.6295 12.6939 44.8519 12.9856C45.0742 13.2684 45.4248 13.5291 45.9038 13.7677C46.3827 13.9975 47.0283 14.2273 47.8408 14.4571C49.3374 14.8725 50.4277 15.3983 51.1119 16.0347C51.8046 16.6622 52.151 17.5018 52.151 18.5535C52.151 19.4107 51.9543 20.1576 51.5609 20.7939C51.1675 21.4302 50.5945 21.9251 49.8419 22.2787C49.0979 22.6233 48.2085 22.7957 47.1737 22.7957Z" fill="black" fill-opacity="0.2"/><path d="M61.3999 22.7957C59.8862 22.7957 58.5906 22.4996 57.513 21.9075C56.4355 21.3153 55.6145 20.4625 55.0501 19.3489C54.4856 18.2353 54.2034 16.9052 54.2034 15.3586C54.2034 13.9003 54.4728 12.6232 55.0116 11.5273C55.5589 10.4314 56.32 9.58741 57.295 8.99527C58.2784 8.39429 59.4116 8.0938 60.6944 8.0938C61.8745 8.0938 62.935 8.36778 63.8757 8.91573C64.8249 9.46368 65.5775 10.237 66.1334 11.2357C66.6893 12.2255 66.9843 13.37 67.0185 14.6692V15.0802C67.0185 15.5044 67.0057 15.9154 66.98 16.3131H56.5125C56.5296 17.7713 56.9785 18.8849 57.8594 19.6538C58.7488 20.4139 59.9717 20.7939 61.5282 20.7939C62.2123 20.7939 62.9221 20.6967 63.6576 20.5022C64.3931 20.3078 65.0815 20.0206 65.7229 19.6405L66.1206 21.417C64.7095 22.3361 63.1359 22.7957 61.3999 22.7957ZM64.748 14.5101C64.748 13.6528 64.5769 12.8884 64.2349 12.2167C63.8928 11.545 63.4182 11.0236 62.811 10.6524C62.2123 10.2723 61.5324 10.0823 60.7713 10.0823C59.9845 10.0823 59.2705 10.2723 58.6291 10.6524C57.9877 11.0236 57.4745 11.5494 57.0897 12.2299C56.7134 12.9016 56.5167 13.6617 56.4996 14.5101H64.748Z" fill="black" fill-opacity="0.2"/><path d="M81.5141 22.5305H79.3205V14.2317C79.3205 12.8353 79.0169 11.788 78.4097 11.0899C77.8025 10.3917 76.9131 10.0426 75.7415 10.0426C75.083 10.0426 74.4844 10.2414 73.9456 10.6391C73.4154 11.028 72.9963 11.5583 72.6885 12.2299C72.3891 12.9016 72.2395 13.6308 72.2395 14.4173V22.5305H70.0459V8.34568H72.2395V10.7982H72.3549C72.7056 9.94976 73.2486 9.28692 73.9841 8.80967C74.7196 8.33242 75.532 8.0938 76.4214 8.0938C78.0719 8.0938 79.3333 8.57989 80.2056 9.55206C81.0779 10.5242 81.5141 11.9206 81.5141 13.7412V22.5305Z" fill="black" fill-opacity="0.2"/><path d="M91.507 22.2787C91.2248 22.3582 90.8956 22.4201 90.5193 22.4642C90.1516 22.5084 89.8309 22.5305 89.5572 22.5305H89.5444C87.4064 22.5305 86.3374 21.4037 86.3374 19.15V10.5728H84.1438V8.5843H86.3374V5.19055L88.5181 4.39513V8.5843H91.4044V10.5728H88.5181V18.7656C88.5181 19.2252 88.5652 19.5831 88.6592 19.8394C88.7619 20.0868 88.9115 20.2636 89.1082 20.3697C89.3049 20.4669 89.5786 20.5243 89.9292 20.542C90.5877 20.5243 91.1136 20.4625 91.507 20.3564V22.2787Z" fill="black" fill-opacity="0.2"/><path d="M100.705 22.7957C99.191 22.7957 97.8953 22.4996 96.8178 21.9075C95.7403 21.3153 94.9193 20.4625 94.3548 19.3489C93.7904 18.2353 93.5082 16.9052 93.5082 15.3586C93.5082 13.9003 93.7776 12.6232 94.3164 11.5273C94.8637 10.4314 95.6248 9.58741 96.5997 8.99527C97.5832 8.39429 98.7163 8.0938 99.9991 8.0938C101.179 8.0938 102.24 8.36778 103.18 8.91573C104.13 9.46368 104.882 10.237 105.438 11.2357C105.994 12.2255 106.289 13.37 106.323 14.6692V15.0802C106.323 15.5044 106.31 15.9154 106.285 16.3131H95.8172C95.8343 17.7713 96.2833 18.8849 97.1642 19.6538C98.0536 20.4139 99.2765 20.7939 100.833 20.7939C101.517 20.7939 102.227 20.6967 102.962 20.5022C103.698 20.3078 104.386 20.0206 105.028 19.6405L105.425 21.417C104.014 22.3361 102.441 22.7957 100.705 22.7957ZM104.053 14.5101C104.053 13.6528 103.882 12.8884 103.54 12.2167C103.198 11.545 102.723 11.0236 102.116 10.6524C101.517 10.2723 100.837 10.0823 100.076 10.0823C99.2893 10.0823 98.5752 10.2723 97.9338 10.6524C97.2924 11.0236 96.7793 11.5494 96.3945 12.2299C96.0182 12.9016 95.8215 13.6617 95.8044 14.5101H104.053Z" fill="black" fill-opacity="0.2"/><path d="M119.292 3.01642H121.473V22.5173H119.292V20.0913H119.19C118.754 20.8955 118.146 21.5451 117.368 22.04C116.59 22.535 115.666 22.7824 114.597 22.7824C113.468 22.7824 112.451 22.4819 111.544 21.8809C110.638 21.28 109.928 20.4448 109.415 19.3754C108.902 18.2972 108.645 17.0687 108.645 15.69C108.645 14.2141 108.906 12.9016 109.428 11.7527C109.949 10.5949 110.668 9.69788 111.583 9.06155C112.498 8.41638 113.524 8.0938 114.661 8.0938C115.662 8.0938 116.56 8.34568 117.355 8.84944C118.151 9.3532 118.771 10.0514 119.215 10.944H119.292V3.01642ZM114.982 21.0458C115.863 21.0458 116.628 20.8071 117.278 20.3299C117.928 19.8526 118.424 19.2384 118.766 18.4872C119.117 17.7271 119.292 16.9317 119.292 16.101V15.279C119.284 14.298 119.091 13.401 118.715 12.5879C118.347 11.766 117.843 11.1164 117.201 10.6391C116.56 10.1619 115.846 9.92325 115.059 9.92325C114.289 9.92325 113.584 10.1707 112.943 10.6656C112.301 11.1517 111.788 11.8322 111.403 12.7072C111.027 13.5821 110.839 14.5764 110.839 15.69C110.839 16.724 111.023 17.6476 111.39 18.4607C111.767 19.2738 112.271 19.9101 112.904 20.3697C113.537 20.8204 114.23 21.0458 114.982 21.0458Z" fill="black" fill-opacity="0.2"/><path d="M145.218 20.1973L148.771 8.34568H150.99L146.706 22.5173L143.909 22.5305L141.793 16.0877L139.073 22.5305H136.725L131.492 8.34568H133.749L138.008 20.1973H138.111L140.933 13.4761L139.24 8.33242H141.344L145.115 20.1973H145.218Z" fill="black" fill-opacity="0.2"/><path d="M155.711 5.37614H153.299V2.88385H155.711V5.37614ZM155.608 22.5305H153.415V8.34568H155.608V22.5305Z" fill="black" fill-opacity="0.2"/><path d="M165.832 22.2787C165.55 22.3582 165.221 22.4201 164.844 22.4642C164.477 22.5084 164.156 22.5305 163.882 22.5305H163.869C161.731 22.5305 160.662 21.4037 160.662 19.15V10.5728H158.469V8.5843H160.662V5.19055L162.843 4.39513V8.5843H165.729V10.5728H162.843V18.7656C162.843 19.2252 162.89 19.5831 162.984 19.8394C163.087 20.0868 163.237 20.2636 163.433 20.3697C163.63 20.4669 163.904 20.5243 164.254 20.542C164.913 20.5243 165.439 20.4625 165.832 20.3564V22.2787Z" fill="black" fill-opacity="0.2"/><path d="M180.007 22.5305H177.813V14.2317C177.813 12.8442 177.51 11.8013 176.903 11.1031C176.304 10.3961 175.427 10.0426 174.273 10.0426C173.64 10.0426 173.063 10.2193 172.541 10.5728C172.019 10.9264 171.6 11.408 171.284 12.0178C170.968 12.6277 170.784 13.2993 170.732 14.0329V22.5305H168.539V3.01642H170.732V10.8512H170.822C171.173 9.98511 171.716 9.30901 172.451 8.82293C173.187 8.33684 173.999 8.0938 174.889 8.0938C176.548 8.0938 177.813 8.57989 178.686 9.55206C179.566 10.5242 180.007 11.9206 180.007 13.7412V22.5305Z" fill="black" fill-opacity="0.2"/><path d="M203.351 8.12962L199.279 14.7542L203.377 22.2477H198.806L196.021 17.3064L193.053 22.2477H188.481L192.79 14.7542L188.586 8.12962H193.105L196.048 12.8537L198.727 8.12962H203.351Z" fill="black" fill-opacity="0.2"/><path d="M205.49 8.12962V22.2477H209.641V14.7814V14.347C209.641 12.8266 210.744 11.4962 212.005 11.4962C213.372 11.4962 214.265 12.5279 214.265 14.1298V22.2477H218.416V14.347C218.416 12.8266 219.44 11.4962 220.649 11.4962C222.068 11.4962 222.987 12.5279 222.987 14.1298V22.2477H227.138V14.0755C227.138 11.7677 226.586 7.58662 221.91 7.58662C219.729 7.58662 218.258 8.69978 217.575 10.003C216.734 8.42828 215.237 7.58662 213.188 7.58662C211.322 7.58662 210.061 8.37398 209.431 9.48713L208.722 8.12962H205.49Z" fill="black" fill-opacity="0.2"/><path d="M229.287 8.12962V22.2477H233.438V8.12962H229.287ZM228.735 3.75846C228.735 5.25172 229.918 6.47347 231.389 6.47347C232.807 6.47347 233.99 5.25172 233.99 3.75846C233.99 2.29236 232.807 1.04346 231.389 1.04346C229.918 1.04346 228.735 2.29236 228.735 3.75846Z" fill="black" fill-opacity="0.2"/><path d="M235.841 8.12962V22.2477H239.992V14.347C239.992 12.8266 241.095 11.4962 242.356 11.4962C243.801 11.4962 244.616 12.4465 244.616 14.1298V22.2477H248.767V13.9397C248.767 9.84008 246.901 7.58662 243.539 7.58662C241.673 7.58662 240.412 8.37398 239.782 9.48713L239.072 8.12962H235.841Z" fill="black" fill-opacity="0.2"/><path d="M257.358 22.5463C258.987 22.5463 260.511 21.949 261.693 20.9173L262.429 22.2477H265.555V3.94851L261.404 2.48241V8.97128C260.248 8.10248 258.856 7.58662 257.358 7.58662C253.47 7.58662 250.344 10.9261 250.344 15.08C250.344 19.2069 253.47 22.5463 257.358 22.5463ZM254.468 14.9986C254.468 12.9895 256.018 11.3605 257.989 11.3605C259.959 11.3605 261.535 12.9895 261.535 14.9986C261.535 17.062 259.959 18.6639 257.989 18.6639C256.018 18.6639 254.468 17.062 254.468 14.9986Z" fill="black" fill-opacity="0.2"/></svg>',
          "print-watermark-light-small":
            '<svg width="134" height="12" viewBox="0 0 134 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.22951 1.7004C4.88374 1.7004 5.46313 1.82634 5.9677 2.07822C6.47654 2.3301 6.86993 2.68362 7.14787 3.13877C7.43008 3.58951 7.57119 4.10874 7.57119 4.69646C7.57119 5.2886 7.43222 5.81445 7.15428 6.27402C6.87634 6.7336 6.48723 7.09153 5.98694 7.34783C5.49093 7.59971 4.92008 7.72565 4.27441 7.72565H2.13856V11.2652H1.0097V1.7004H4.22951ZM4.24234 6.7115C4.67422 6.7115 5.05692 6.62975 5.39044 6.46625C5.72397 6.29833 5.98266 6.06633 6.16653 5.77026C6.35467 5.47419 6.44875 5.13835 6.44875 4.76274C6.44875 4.36503 6.3504 4.01152 6.1537 3.70219C5.96129 3.38845 5.68976 3.1454 5.33913 2.97306C4.99278 2.79631 4.59511 2.70793 4.14613 2.70793H2.15139V6.7115H4.24234Z" fill="white" fill-opacity="0.2"/><path d="M10.3164 5.35267C10.5259 4.95938 10.8188 4.64564 11.1951 4.41143C11.5756 4.17281 12.0524 4.05129 12.6254 4.04687V5.07428C11.7488 5.0787 11.1416 5.29302 10.8038 5.71724C10.466 6.13704 10.295 6.66289 10.2907 7.2948V11.2652H9.20034V4.17281H10.2907V5.35267H10.3164Z" fill="white" fill-opacity="0.2"/><path d="M16.9612 11.3978C16.2044 11.3978 15.5566 11.2498 15.0178 10.9537C14.479 10.6576 14.0685 10.2312 13.7863 9.67441C13.5041 9.11762 13.363 8.45257 13.363 7.67925C13.363 6.95013 13.4977 6.31159 13.7671 5.76363C14.0407 5.21568 14.4213 4.79367 14.9088 4.4976C15.4005 4.19711 15.9671 4.04687 16.6085 4.04687C17.1986 4.04687 17.7288 4.18386 18.1991 4.45783C18.6738 4.73181 19.05 5.11847 19.328 5.61781C19.6059 6.11273 19.7534 6.68499 19.7706 7.33457V7.54006C19.7706 7.75217 19.7641 7.95765 19.7513 8.1565H14.5175C14.5261 8.88563 14.7506 9.44242 15.191 9.82687C15.6357 10.2069 16.2471 10.3969 17.0254 10.3969C17.3675 10.3969 17.7224 10.3483 18.0901 10.2511C18.4578 10.1539 18.802 10.0103 19.1227 9.82024L19.3216 10.7084C18.616 11.168 17.8293 11.3978 16.9612 11.3978ZM18.6353 7.25503C18.6353 6.82639 18.5498 6.44415 18.3787 6.10831C18.2077 5.77247 17.9704 5.51175 17.6668 5.32616C17.3675 5.13614 17.0275 5.04114 16.6469 5.04114C16.2536 5.04114 15.8965 5.13614 15.5758 5.32616C15.2551 5.51175 14.9986 5.77468 14.8061 6.11494C14.618 6.45078 14.5197 6.83081 14.5111 7.25503H18.6353Z" fill="white" fill-opacity="0.2"/><path d="M23.5869 11.3978C23.1037 11.3978 22.6141 11.3116 22.1181 11.1393C21.6263 10.967 21.1773 10.7305 20.7711 10.4301L21.1175 9.56836C21.5151 9.83349 21.9256 10.0368 22.349 10.1782C22.7723 10.3152 23.1657 10.3881 23.5291 10.3969C23.9738 10.4013 24.3266 10.3174 24.5874 10.145C24.8525 9.97269 24.9851 9.72081 24.9851 9.38939C24.9851 9.17286 24.9252 8.98726 24.8055 8.8326C24.6901 8.67794 24.5062 8.54095 24.2539 8.42164C24.0059 8.30233 23.6702 8.18743 23.2469 8.07696C22.5328 7.88694 22.0069 7.62181 21.6691 7.28155C21.3356 6.93687 21.1688 6.50823 21.1688 5.99563C21.1688 5.6156 21.2629 5.27755 21.451 4.98148C21.6434 4.68541 21.9107 4.45562 22.2528 4.29212C22.5991 4.12862 22.9946 4.04687 23.4393 4.04687C23.837 4.04687 24.2368 4.10432 24.6387 4.21921C25.0407 4.32968 25.4127 4.48214 25.7548 4.67657L25.5688 5.60455C24.8461 5.22452 24.1834 5.03451 23.5804 5.03451C23.1956 5.03451 22.8792 5.12068 22.6312 5.29302C22.3832 5.46094 22.2592 5.6863 22.2592 5.96912C22.2592 6.17239 22.3148 6.34694 22.4259 6.49276C22.5371 6.63417 22.7124 6.76453 22.9519 6.88384C23.1913 6.99873 23.5142 7.11363 23.9204 7.22852C24.6687 7.43621 25.2139 7.69914 25.5559 8.0173C25.9023 8.33105 26.0755 8.75085 26.0755 9.27671C26.0755 9.70535 25.9771 10.0787 25.7804 10.3969C25.5837 10.7151 25.2972 10.9625 24.921 11.1393C24.549 11.3116 24.1043 11.3978 23.5869 11.3978Z" fill="white" fill-opacity="0.2"/><path d="M30.6999 11.3978C29.9431 11.3978 29.2953 11.2498 28.7565 10.9537C28.2177 10.6576 27.8072 10.2312 27.525 9.67441C27.2428 9.11762 27.1017 8.45257 27.1017 7.67925C27.1017 6.95013 27.2364 6.31159 27.5058 5.76363C27.7795 5.21568 28.16 4.79367 28.6475 4.4976C29.1392 4.19711 29.7058 4.04687 30.3472 4.04687C30.9373 4.04687 31.4675 4.18386 31.9378 4.45783C32.4125 4.73181 32.7888 5.11847 33.0667 5.61781C33.3446 6.11273 33.4922 6.68499 33.5093 7.33457V7.54006C33.5093 7.75217 33.5028 7.95765 33.49 8.1565H28.2562C28.2648 8.88563 28.4893 9.44242 28.9297 9.82687C29.3744 10.2069 29.9859 10.3969 30.7641 10.3969C31.1062 10.3969 31.4611 10.3483 31.8288 10.2511C32.1965 10.1539 32.5408 10.0103 32.8615 9.82024L33.0603 10.7084C32.3547 11.168 31.568 11.3978 30.6999 11.3978ZM32.374 7.25503C32.374 6.82639 32.2885 6.44415 32.1174 6.10831C31.9464 5.77247 31.7091 5.51175 31.4055 5.32616C31.1062 5.13614 30.7662 5.04114 30.3857 5.04114C29.9923 5.04114 29.6352 5.13614 29.3145 5.32616C28.9938 5.51175 28.7373 5.77468 28.5449 6.11494C28.3567 6.45078 28.2584 6.83081 28.2498 7.25503H32.374Z" fill="white" fill-opacity="0.2"/><path d="M40.757 11.2652H39.6603V7.11584C39.6603 6.41764 39.5085 5.89399 39.2049 5.5449C38.9013 5.1958 38.4566 5.02125 37.8708 5.02125C37.5415 5.02125 37.2422 5.12068 36.9728 5.31953C36.7077 5.51396 36.4982 5.7791 36.3442 6.11494C36.1946 6.45078 36.1197 6.81535 36.1197 7.20863V11.2652H35.023V4.17281H36.1197V5.39907H36.1775C36.3528 4.97485 36.6243 4.64343 36.992 4.40481C37.3598 4.16618 37.766 4.04687 38.2107 4.04687C39.036 4.04687 39.6667 4.28991 40.1028 4.776C40.539 5.26208 40.757 5.96028 40.757 6.87058V11.2652Z" fill="white" fill-opacity="0.2"/><path d="M45.7535 11.1393C45.6124 11.1791 45.4478 11.21 45.2596 11.2321C45.0758 11.2542 44.9154 11.2652 44.7786 11.2652H44.7722C43.7032 11.2652 43.1687 10.7018 43.1687 9.57499V5.28639H42.0719V4.29212H43.1687V2.59524L44.2591 2.19754V4.29212H45.7022V5.28639H44.2591V9.38276C44.2591 9.61255 44.2826 9.79151 44.3296 9.91966C44.3809 10.0434 44.4558 10.1318 44.5541 10.1848C44.6525 10.2334 44.7893 10.2621 44.9646 10.271C45.2939 10.2621 45.5568 10.2312 45.7535 10.1782V11.1393Z" fill="white" fill-opacity="0.2"/><path d="M50.3523 11.3978C49.5955 11.3978 48.9477 11.2498 48.4089 10.9537C47.8701 10.6576 47.4596 10.2312 47.1774 9.67441C46.8952 9.11762 46.7541 8.45257 46.7541 7.67925C46.7541 6.95013 46.8888 6.31159 47.1582 5.76363C47.4318 5.21568 47.8124 4.79367 48.2999 4.4976C48.7916 4.19711 49.3582 4.04687 49.9996 4.04687C50.5896 4.04687 51.1199 4.18386 51.5902 4.45783C52.0649 4.73181 52.4411 5.11847 52.7191 5.61781C52.997 6.11273 53.1445 6.68499 53.1616 7.33457V7.54006C53.1616 7.75217 53.1552 7.95765 53.1424 8.1565H47.9086C47.9172 8.88563 48.1417 9.44242 48.5821 9.82687C49.0268 10.2069 49.6382 10.3969 50.4165 10.3969C50.7585 10.3969 51.1135 10.3483 51.4812 10.2511C51.8489 10.1539 52.1931 10.0103 52.5138 9.82024L52.7127 10.7084C52.0071 11.168 51.2204 11.3978 50.3523 11.3978ZM52.0264 7.25503C52.0264 6.82639 51.9409 6.44415 51.7698 6.10831C51.5988 5.77247 51.3615 5.51175 51.0579 5.32616C50.7585 5.13614 50.4186 5.04114 50.038 5.04114C49.6447 5.04114 49.2876 5.13614 48.9669 5.32616C48.6462 5.51175 48.3897 5.77468 48.1972 6.11494C48.0091 6.45078 47.9107 6.83081 47.9022 7.25503H52.0264Z" fill="white" fill-opacity="0.2"/><path d="M59.6462 1.50818H60.7365V11.2586H59.6462V10.0456H59.5949C59.3768 10.4477 59.0732 10.7725 58.6841 11.02C58.295 11.2674 57.8332 11.3912 57.2987 11.3912C56.7342 11.3912 56.2254 11.2409 55.7721 10.9404C55.3189 10.64 54.964 10.2224 54.7074 9.68767C54.4509 9.14856 54.3226 8.53432 54.3226 7.84496C54.3226 7.107 54.453 6.45078 54.7138 5.87632C54.9747 5.29743 55.3338 4.84891 55.7914 4.53075C56.2489 4.20816 56.762 4.04687 57.3307 4.04687C57.831 4.04687 58.28 4.17281 58.6777 4.42469C59.0753 4.67657 59.3853 5.02567 59.6077 5.47198H59.6462V1.50818ZM57.4911 10.5229C57.9315 10.5229 58.3142 10.4035 58.6392 10.1649C58.9641 9.92629 59.2122 9.61918 59.3832 9.24356C59.5585 8.86353 59.6462 8.46583 59.6462 8.05045V7.63948C59.6419 7.14898 59.5457 6.70045 59.3575 6.29391C59.1737 5.88295 58.9214 5.55815 58.6007 5.31953C58.28 5.08091 57.9229 4.96159 57.5296 4.96159C57.1447 4.96159 56.792 5.08533 56.4713 5.33279C56.1506 5.57583 55.894 5.91609 55.7016 6.35357C55.5134 6.79104 55.4194 7.28818 55.4194 7.84496C55.4194 8.36198 55.5113 8.82376 55.6952 9.23031C55.8833 9.63685 56.1356 9.95502 56.452 10.1848C56.7684 10.4102 57.1148 10.5229 57.4911 10.5229Z" fill="white" fill-opacity="0.2"/><path d="M72.6088 10.0986L74.3855 4.17281H75.4951L73.3528 11.2586L71.9546 11.2652L70.8963 8.04382L69.5365 11.2652H68.3627L65.7458 4.17281H66.8747L69.0041 10.0986H69.0555L70.4665 6.73802L69.6199 4.16618H70.6718L72.5575 10.0986H72.6088Z" fill="white" fill-opacity="0.2"/><path d="M77.8554 2.68804H76.6496V1.44189H77.8554V2.68804ZM77.8041 11.2652H76.7073V4.17281H77.8041V11.2652Z" fill="white" fill-opacity="0.2"/><path d="M82.916 11.1393C82.7749 11.1791 82.6103 11.21 82.4222 11.2321C82.2383 11.2542 82.0779 11.2652 81.9411 11.2652H81.9347C80.8657 11.2652 80.3312 10.7018 80.3312 9.57499V5.28639H79.2344V4.29212H80.3312V2.59524L81.4216 2.19754V4.29212H82.8647V5.28639H81.4216V9.38276C81.4216 9.61255 81.4451 9.79151 81.4921 9.91966C81.5434 10.0434 81.6183 10.1318 81.7166 10.1848C81.815 10.2334 81.9518 10.2621 82.1271 10.271C82.4564 10.2621 82.7193 10.2312 82.916 10.1782V11.1393Z" fill="white" fill-opacity="0.2"/><path d="M90.0035 11.2652H88.9067V7.11584C88.9067 6.42206 88.7549 5.90062 88.4513 5.55153C88.152 5.19801 87.7137 5.02125 87.1364 5.02125C86.82 5.02125 86.5314 5.10963 86.2705 5.28639C86.0097 5.46315 85.8002 5.70398 85.642 6.00889C85.4838 6.3138 85.3918 6.64964 85.3662 7.01641V11.2652H84.2694V1.50818H85.3662V5.42558H85.4111C85.5864 4.99253 85.8579 4.65448 86.2256 4.41143C86.5934 4.16839 86.9996 4.04687 87.4443 4.04687C88.2738 4.04687 88.9067 4.28991 89.3428 4.776C89.7832 5.26208 90.0035 5.96028 90.0035 6.87058V11.2652Z" fill="white" fill-opacity="0.2"/><path d="M101.676 4.06481L99.6395 7.37712L101.689 11.1238H99.4031L98.0107 8.65318L96.5263 11.1238H94.2407L96.395 7.37712L94.2932 4.06481H96.5526L98.0238 6.42687L99.3636 4.06481H101.676Z" fill="white" fill-opacity="0.2"/><path d="M102.745 4.06481V11.1238H104.821V7.3907V7.1735C104.821 6.41329 105.372 5.74812 106.003 5.74812C106.686 5.74812 107.132 6.26397 107.132 7.0649V11.1238H109.208V7.1735C109.208 6.41329 109.72 5.74812 110.324 5.74812C111.034 5.74812 111.494 6.26397 111.494 7.0649V11.1238H113.569V7.03775C113.569 5.88387 113.293 3.79331 110.955 3.79331C109.865 3.79331 109.129 4.34989 108.788 5.00149C108.367 4.21414 107.618 3.79331 106.594 3.79331C105.661 3.79331 105.031 4.18699 104.715 4.74356L104.361 4.06481H102.745Z" fill="white" fill-opacity="0.2"/><path d="M114.644 4.06481V11.1238H116.719V4.06481H114.644ZM114.368 1.87923C114.368 2.62586 114.959 3.23674 115.694 3.23674C116.404 3.23674 116.995 2.62586 116.995 1.87923C116.995 1.14618 116.404 0.521729 115.694 0.521729C114.959 0.521729 114.368 1.14618 114.368 1.87923Z" fill="white" fill-opacity="0.2"/><path d="M117.921 4.06481V11.1238H119.996V7.1735C119.996 6.41329 120.548 5.74812 121.178 5.74812C121.901 5.74812 122.308 6.22324 122.308 7.0649V11.1238H124.383V6.96987C124.383 4.92004 123.451 3.79331 121.769 3.79331C120.837 3.79331 120.206 4.18699 119.891 4.74356L119.536 4.06481H117.921Z" fill="white" fill-opacity="0.2"/><path d="M128.679 11.2732C129.494 11.2732 130.255 10.9745 130.847 10.4587L131.214 11.1238H132.778V1.97426L130.702 1.24121V4.48564C130.124 4.05124 129.428 3.79331 128.679 3.79331C126.735 3.79331 125.172 5.46304 125.172 7.54002C125.172 9.60343 126.735 11.2732 128.679 11.2732ZM127.234 7.4993C127.234 6.49474 128.009 5.68024 128.994 5.68024C129.98 5.68024 130.768 6.49474 130.768 7.4993C130.768 8.531 129.98 9.33193 128.994 9.33193C128.009 9.33193 127.234 8.531 127.234 7.4993Z" fill="white" fill-opacity="0.2"/></svg>',
          "print-watermark-light-normal":
            '<svg width="201" height="18" viewBox="0 0 201 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.34427 2.55061C7.32561 2.55061 8.1947 2.73952 8.95155 3.11734C9.71481 3.49516 10.3049 4.02543 10.7218 4.70816C11.1451 5.38426 11.3568 6.1631 11.3568 7.04468C11.3568 7.9329 11.1483 8.72168 10.7314 9.41104C10.3145 10.1004 9.73084 10.6373 8.98041 11.0217C8.23639 11.3996 7.38013 11.5885 6.41162 11.5885H3.20784V16.8979H1.51456V2.55061H6.34427ZM6.36351 10.0673C7.01132 10.0673 7.58537 9.94463 8.08566 9.69937C8.58595 9.44749 8.974 9.0995 9.2498 8.65539C9.53201 8.21129 9.67312 7.70753 9.67312 7.14411C9.67312 6.54755 9.5256 6.01728 9.23056 5.55329C8.94193 5.08267 8.53464 4.7181 8.0087 4.45959C7.48916 4.19446 6.89267 4.06189 6.2192 4.06189H3.22709V10.0673H6.36351Z" fill="white" fill-opacity="0.2"/><path d="M15.4745 8.02901C15.7888 7.43908 16.2282 6.96846 16.7926 6.61715C17.3635 6.25922 18.0786 6.07693 18.9381 6.0703V7.61142C17.6232 7.61804 16.7124 7.93952 16.2057 8.57585C15.699 9.20556 15.4425 9.99434 15.4361 10.9422V16.8979H13.8005V6.25922H15.4361V8.02901H15.4745Z" fill="white" fill-opacity="0.2"/><path d="M25.4418 17.0967C24.3066 17.0967 23.3349 16.8747 22.5267 16.4306C21.7185 15.9864 21.1028 15.3468 20.6795 14.5116C20.2562 13.6764 20.0445 12.6789 20.0445 11.5189C20.0445 10.4252 20.2465 9.46738 20.6506 8.64545C21.0611 7.82353 21.632 7.19051 22.3631 6.74641C23.1008 6.29567 23.9506 6.0703 24.9127 6.0703C25.7978 6.0703 26.5932 6.27579 27.2987 6.68675C28.0106 7.09771 28.5751 7.6777 28.992 8.42671C29.4089 9.1691 29.6302 10.0275 29.6558 11.0019V11.3101C29.6558 11.6282 29.6462 11.9365 29.627 12.2348H21.7763C21.7891 13.3284 22.1258 14.1636 22.7865 14.7403C23.4535 15.3103 24.3707 15.5954 25.5381 15.5954C26.0512 15.5954 26.5835 15.5225 27.1351 15.3766C27.6867 15.2308 28.2031 15.0154 28.6841 14.7304L28.9824 16.0627C27.9241 16.752 26.7439 17.0967 25.4418 17.0967ZM27.9529 10.8825C27.9529 10.2396 27.8246 9.66623 27.5681 9.16247C27.3115 8.65871 26.9555 8.26763 26.5002 7.98924C26.0512 7.70421 25.5413 7.5617 24.9704 7.5617C24.3803 7.5617 23.8448 7.70421 23.3637 7.98924C22.8827 8.26763 22.4978 8.66202 22.2092 9.17241C21.927 9.67617 21.7795 10.2462 21.7666 10.8825H27.9529Z" fill="white" fill-opacity="0.2"/><path d="M35.3803 17.0967C34.6555 17.0967 33.9211 16.9675 33.1771 16.7089C32.4395 16.4504 31.766 16.0958 31.1567 15.6451L31.6762 14.3525C32.2727 14.7502 32.8885 15.0551 33.5234 15.2673C34.1584 15.4727 34.7485 15.5821 35.2937 15.5954C35.9608 15.602 36.4899 15.4761 36.8812 15.2175C37.2788 14.959 37.4777 14.5812 37.4777 14.0841C37.4777 13.7593 37.3879 13.4809 37.2083 13.2489C37.0351 13.0169 36.7593 12.8114 36.3809 12.6325C36.0089 12.4535 35.5054 12.2811 34.8704 12.1154C33.7992 11.8304 33.0103 11.4327 32.5036 10.9223C32.0033 10.4053 31.7532 9.76234 31.7532 8.99345C31.7532 8.4234 31.8943 7.91632 32.1765 7.47222C32.4651 7.02811 32.866 6.68344 33.3791 6.43818C33.8987 6.19293 34.492 6.0703 35.159 6.0703C35.7555 6.0703 36.3552 6.15647 36.9581 6.32881C37.561 6.49452 38.119 6.72321 38.6322 7.01486L38.3532 8.40683C37.2692 7.83678 36.275 7.55176 35.3707 7.55176C34.7934 7.55176 34.3188 7.68101 33.9468 7.93952C33.5748 8.1914 33.3888 8.52945 33.3888 8.95367C33.3888 9.25858 33.4721 9.52041 33.6389 9.73914C33.8057 9.95125 34.0686 10.1468 34.4278 10.3258C34.787 10.4981 35.2712 10.6704 35.8806 10.8428C37.003 11.1543 37.8208 11.5487 38.3339 12.026C38.8534 12.4966 39.1132 13.1263 39.1132 13.9151C39.1132 14.558 38.9657 15.1181 38.6707 15.5954C38.3756 16.0726 37.9459 16.4438 37.3814 16.7089C36.8234 16.9675 36.1564 17.0967 35.3803 17.0967Z" fill="white" fill-opacity="0.2"/><path d="M46.0499 17.0967C44.9146 17.0967 43.9429 16.8747 43.1348 16.4306C42.3266 15.9864 41.7109 15.3468 41.2875 14.5116C40.8642 13.6764 40.6526 12.6789 40.6526 11.5189C40.6526 10.4252 40.8546 9.46738 41.2587 8.64545C41.6692 7.82353 42.24 7.19051 42.9712 6.74641C43.7088 6.29567 44.5587 6.0703 45.5208 6.0703C46.4059 6.0703 47.2012 6.27579 47.9068 6.68675C48.6187 7.09771 49.1831 7.6777 49.6 8.42671C50.017 9.1691 50.2382 10.0275 50.2639 11.0019V11.3101C50.2639 11.6282 50.2543 11.9365 50.235 12.2348H42.3843C42.3972 13.3284 42.7339 14.1636 43.3945 14.7403C44.0616 15.3103 44.9788 15.5954 46.1461 15.5954C46.6592 15.5954 47.1916 15.5225 47.7432 15.3766C48.2948 15.2308 48.8111 15.0154 49.2922 14.7304L49.5904 16.0627C48.5321 16.752 47.352 17.0967 46.0499 17.0967ZM48.561 10.8825C48.561 10.2396 48.4327 9.66623 48.1761 9.16247C47.9196 8.65871 47.5636 8.26763 47.1082 7.98924C46.6592 7.70421 46.1493 7.5617 45.5785 7.5617C44.9884 7.5617 44.4528 7.70421 43.9718 7.98924C43.4907 8.26763 43.1059 8.66202 42.8173 9.17241C42.5351 9.67617 42.3875 10.2462 42.3747 10.8825H48.561Z" fill="white" fill-opacity="0.2"/><path d="M61.1356 16.8979H59.4904V10.6738C59.4904 9.62646 59.2627 8.84099 58.8073 8.31734C58.3519 7.7937 57.6848 7.53187 56.8061 7.53187C56.3123 7.53187 55.8633 7.68101 55.4592 7.97929C55.0615 8.27095 54.7473 8.66865 54.5163 9.17241C54.2919 9.67617 54.1796 10.223 54.1796 10.813V16.8979H52.5344V6.25922H54.1796V8.09861H54.2662C54.5292 7.46228 54.9365 6.96514 55.4881 6.60721C56.0397 6.24927 56.649 6.0703 57.316 6.0703C58.5539 6.0703 59.5 6.43487 60.1542 7.164C60.8084 7.89312 61.1356 8.94042 61.1356 10.3059V16.8979Z" fill="white" fill-opacity="0.2"/><path d="M68.6303 16.7089C68.4186 16.7686 68.1717 16.815 67.8895 16.8481C67.6137 16.8813 67.3731 16.8979 67.1679 16.8979H67.1583C65.5548 16.8979 64.753 16.0527 64.753 14.3625V7.92958H63.1079V6.43818H64.753V3.89286L66.3886 3.2963V6.43818H68.5533V7.92958H66.3886V14.0741C66.3886 14.4188 66.4239 14.6873 66.4944 14.8795C66.5714 15.0651 66.6836 15.1977 66.8312 15.2772C66.9787 15.3501 67.1839 15.3932 67.4469 15.4065C67.9408 15.3932 68.3352 15.3468 68.6303 15.2673V16.7089Z" fill="white" fill-opacity="0.2"/><path d="M75.5285 17.0967C74.3932 17.0967 73.4215 16.8747 72.6133 16.4306C71.8052 15.9864 71.1894 15.3468 70.7661 14.5116C70.3428 13.6764 70.1311 12.6789 70.1311 11.5189C70.1311 10.4252 70.3332 9.46738 70.7373 8.64545C71.1478 7.82353 71.7186 7.19051 72.4498 6.74641C73.1874 6.29567 74.0372 6.0703 74.9993 6.0703C75.8845 6.0703 76.6798 6.27579 77.3853 6.68675C78.0973 7.09771 78.6617 7.6777 79.0786 8.42671C79.4955 9.1691 79.7168 10.0275 79.7425 11.0019V11.3101C79.7425 11.6282 79.7328 11.9365 79.7136 12.2348H71.8629C71.8757 13.3284 72.2125 14.1636 72.8731 14.7403C73.5402 15.3103 74.4574 15.5954 75.6247 15.5954C76.1378 15.5954 76.6702 15.5225 77.2218 15.3766C77.7734 15.2308 78.2897 15.0154 78.7708 14.7304L79.069 16.0627C78.0107 16.752 76.8305 17.0967 75.5285 17.0967ZM78.0396 10.8825C78.0396 10.2396 77.9113 9.66623 77.6547 9.16247C77.3982 8.65871 77.0422 8.26763 76.5868 7.98924C76.1378 7.70421 75.6279 7.5617 75.0571 7.5617C74.467 7.5617 73.9314 7.70421 73.4504 7.98924C72.9693 8.26763 72.5845 8.66202 72.2959 9.17241C72.0136 9.67617 71.8661 10.2462 71.8533 10.8825H78.0396Z" fill="white" fill-opacity="0.2"/><path d="M89.4692 2.26227H91.1048V16.8879H89.4692V15.0684H89.3923C89.0652 15.6716 88.6098 16.1588 88.0261 16.53C87.4424 16.9012 86.7497 17.0868 85.948 17.0868C85.1013 17.0868 84.3381 16.8614 83.6582 16.4107C82.9783 15.9599 82.446 15.3335 82.0611 14.5315C81.6763 13.7228 81.4839 12.8015 81.4839 11.7674C81.4839 10.6605 81.6795 9.67617 82.0707 8.81448C82.462 7.94615 83.0008 7.27337 83.6871 6.79612C84.3734 6.31224 85.143 6.0703 85.9961 6.0703C86.7465 6.0703 87.42 6.25922 88.0165 6.63704C88.613 7.01486 89.078 7.5385 89.4115 8.20798H89.4692V2.26227ZM86.2366 15.7843C86.8972 15.7843 87.4713 15.6053 87.9588 15.2474C88.4462 14.8894 88.8182 14.4288 89.0748 13.8653C89.3378 13.2953 89.4692 12.6987 89.4692 12.0757V11.4592C89.4628 10.7235 89.3185 10.0507 89.0363 9.44086C88.7605 8.82442 88.3821 8.33723 87.901 7.97929C87.42 7.62136 86.8844 7.44239 86.2943 7.44239C85.7171 7.44239 85.1879 7.62799 84.7069 7.99918C84.2258 8.36374 83.841 8.87413 83.5524 9.53035C83.2702 10.1866 83.129 10.9323 83.129 11.7674C83.129 12.543 83.2669 13.2356 83.5427 13.8455C83.825 14.4553 84.2034 14.9325 84.678 15.2772C85.1526 15.6153 85.6722 15.7843 86.2366 15.7843Z" fill="white" fill-opacity="0.2"/><path d="M108.913 15.1479L111.578 6.25922H113.243L110.029 16.8879L107.932 16.8979L106.344 12.0657L104.305 16.8979H102.544L98.6188 6.25922H100.312L103.506 15.1479H103.583L105.7 10.107L104.43 6.24927H106.008L108.836 15.1479H108.913Z" fill="white" fill-opacity="0.2"/><path d="M116.783 4.03206H114.974V2.16284H116.783V4.03206ZM116.706 16.8979H115.061V6.25922H116.706V16.8979Z" fill="white" fill-opacity="0.2"/><path d="M124.374 16.7089C124.162 16.7686 123.915 16.815 123.633 16.8481C123.357 16.8813 123.117 16.8979 122.912 16.8979H122.902C121.299 16.8979 120.497 16.0527 120.497 14.3625V7.92958H118.852V6.43818H120.497V3.89286L122.132 3.2963V6.43818H124.297V7.92958H122.132V14.0741C122.132 14.4188 122.168 14.6873 122.238 14.8795C122.315 15.0651 122.427 15.1977 122.575 15.2772C122.722 15.3501 122.928 15.3932 123.191 15.4065C123.685 15.3932 124.079 15.3468 124.374 15.2673V16.7089Z" fill="white" fill-opacity="0.2"/><path d="M135.005 16.8979H133.36V10.6738C133.36 9.63309 133.132 8.85093 132.677 8.32729C132.228 7.79701 131.571 7.53187 130.705 7.53187C130.23 7.53187 129.797 7.66444 129.406 7.92958C129.015 8.19472 128.7 8.55597 128.463 9.01333C128.226 9.47069 128.088 9.97445 128.049 10.5246V16.8979H126.404V2.26227H128.049V8.13838H128.117C128.38 7.48879 128.787 6.98171 129.338 6.61715C129.89 6.25259 130.499 6.0703 131.166 6.0703C132.411 6.0703 133.36 6.43487 134.014 7.164C134.675 7.89312 135.005 8.94042 135.005 10.3059V16.8979Z" fill="white" fill-opacity="0.2"/><path d="M152.513 6.09722L149.459 11.0657L152.533 16.6857H149.105L147.016 12.9798L144.789 16.6857H141.361L144.592 11.0657L141.44 6.09722H144.829L147.036 9.6403L149.045 6.09722H152.513Z" fill="white" fill-opacity="0.2"/><path d="M154.118 6.09722V16.6857H157.231V11.086V10.7602C157.231 9.61994 158.058 8.62218 159.004 8.62218C160.029 8.62218 160.699 9.39595 160.699 10.5973V16.6857H163.812V10.7602C163.812 9.61994 164.58 8.62218 165.487 8.62218C166.551 8.62218 167.24 9.39595 167.24 10.5973V16.6857H170.353V10.5566C170.353 8.8258 169.94 5.68997 166.432 5.68997C164.797 5.68997 163.694 6.52483 163.181 7.50224C162.551 6.32121 161.428 5.68997 159.891 5.68997C158.492 5.68997 157.546 6.28048 157.073 7.11535L156.541 6.09722H154.118Z" fill="white" fill-opacity="0.2"/><path d="M171.965 6.09722V16.6857H175.078V6.09722H171.965ZM171.552 2.81885C171.552 3.93879 172.438 4.8551 173.542 4.8551C174.606 4.8551 175.492 3.93879 175.492 2.81885C175.492 1.71927 174.606 0.782593 173.542 0.782593C172.438 0.782593 171.552 1.71927 171.552 2.81885Z" fill="white" fill-opacity="0.2"/><path d="M176.881 6.09722V16.6857H179.994V10.7602C179.994 9.61994 180.822 8.62218 181.767 8.62218C182.851 8.62218 183.462 9.33487 183.462 10.5973V16.6857H186.575V10.4548C186.575 7.38006 185.176 5.68997 182.654 5.68997C181.255 5.68997 180.309 6.28048 179.836 7.11535L179.304 6.09722H176.881Z" fill="white" fill-opacity="0.2"/><path d="M193.019 16.9097C194.24 16.9097 195.383 16.4618 196.27 15.688L196.822 16.6857H199.166V2.96139L196.053 1.86181V6.72846C195.186 6.07686 194.142 5.68997 193.019 5.68997C190.103 5.68997 187.758 8.19456 187.758 11.31C187.758 14.4051 190.103 16.9097 193.019 16.9097ZM190.851 11.2489C190.851 9.74212 192.014 8.52036 193.492 8.52036C194.969 8.52036 196.152 9.74212 196.152 11.2489C196.152 12.7965 194.969 13.9979 193.492 13.9979C192.014 13.9979 190.851 12.7965 190.851 11.2489Z" fill="white" fill-opacity="0.2"/></svg>',
          "print-watermark-light-big":
            '<svg width="268" height="24" viewBox="0 0 268 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.45903 3.40087C9.76748 3.40087 10.9263 3.65275 11.9354 4.15651C12.9531 4.66027 13.7399 5.3673 14.2957 6.27761C14.8602 7.17908 15.1424 8.21753 15.1424 9.39297C15.1424 10.5773 14.8644 11.629 14.3086 12.5481C13.7527 13.4673 12.9745 14.1831 11.9739 14.6957C10.9819 15.1995 9.84017 15.4514 8.54882 15.4514H4.27712V22.5305H2.01941V3.40087H8.45903ZM8.48469 13.4231C9.34843 13.4231 10.1138 13.2596 10.7809 12.9326C11.4479 12.5967 11.9653 12.1327 12.3331 11.5406C12.7093 10.9484 12.8975 10.2768 12.8975 9.52554C12.8975 8.73013 12.7008 8.0231 12.3074 7.40444C11.9226 6.77695 11.3795 6.29087 10.6783 5.94619C9.98555 5.59267 9.19022 5.41591 8.29227 5.41591H4.30278V13.4231H8.48469Z" fill="white" fill-opacity="0.2"/><path d="M20.6327 10.7054C21.0518 9.91883 21.6376 9.29134 22.3902 8.82293C23.1513 8.34568 24.1048 8.10264 25.2508 8.0938V10.1486C23.4976 10.1575 22.2833 10.5861 21.6077 11.4345C20.9321 12.2741 20.59 13.3258 20.5814 14.5897V22.5305H18.4007V8.34568H20.5814V10.7054H20.6327Z" fill="white" fill-opacity="0.2"/><path d="M33.9225 22.7957C32.4088 22.7957 31.1132 22.4996 30.0356 21.9075C28.9581 21.3153 28.1371 20.4625 27.5726 19.3489C27.0082 18.2353 26.726 16.9052 26.726 15.3586C26.726 13.9003 26.9954 12.6232 27.5342 11.5273C28.0815 10.4314 28.8426 9.58741 29.8175 8.99527C30.801 8.39429 31.9341 8.0938 33.2169 8.0938C34.3971 8.0938 35.4575 8.36778 36.3983 8.91573C37.3475 9.46368 38.1001 10.237 38.656 11.2357C39.2119 12.2255 39.5069 13.37 39.5411 14.6692V15.0802C39.5411 15.5044 39.5283 15.9154 39.5026 16.3131H29.035C29.0521 17.7713 29.5011 18.8849 30.382 19.6538C31.2714 20.4139 32.4943 20.7939 34.0507 20.7939C34.7349 20.7939 35.4447 20.6967 36.1802 20.5022C36.9157 20.3078 37.6041 20.0206 38.2455 19.6405L38.6431 21.417C37.2321 22.3361 35.6585 22.7957 33.9225 22.7957ZM37.2706 14.5101C37.2706 13.6528 37.0995 12.8884 36.7574 12.2167C36.4154 11.545 35.9407 11.0236 35.3335 10.6524C34.7349 10.2723 34.055 10.0823 33.2939 10.0823C32.5071 10.0823 31.793 10.2723 31.1516 10.6524C30.5102 11.0236 29.9971 11.5494 29.6123 12.2299C29.236 12.9016 29.0393 13.6617 29.0222 14.5101H37.2706Z" fill="white" fill-opacity="0.2"/><path d="M47.1737 22.7957C46.2073 22.7957 45.2281 22.6233 44.2361 22.2787C43.2526 21.934 42.3547 21.4611 41.5423 20.8602L42.235 19.1368C43.0303 19.667 43.8513 20.0736 44.6979 20.3564C45.5446 20.6304 46.3314 20.7762 47.0583 20.7939C47.9477 20.8027 48.6532 20.6348 49.1749 20.2901C49.7051 19.9454 49.9702 19.4417 49.9702 18.7788C49.9702 18.3458 49.8505 17.9746 49.611 17.6653C49.3801 17.3559 49.0124 17.082 48.5078 16.8433C48.0118 16.6047 47.3405 16.3749 46.4938 16.154C45.0657 15.7739 44.0138 15.2437 43.3382 14.5632C42.6711 13.8738 42.3376 13.0165 42.3376 11.9913C42.3376 11.2313 42.5257 10.5552 42.902 9.96302C43.2869 9.37088 43.8214 8.91131 44.5055 8.5843C45.1982 8.2573 45.9893 8.0938 46.8787 8.0938C47.674 8.0938 48.4736 8.20869 49.2775 8.43848C50.0814 8.65943 50.8254 8.96433 51.5096 9.3532L51.1375 11.2092C49.6923 10.4491 48.3667 10.0691 47.1609 10.0691C46.3912 10.0691 45.7584 10.2414 45.2624 10.5861C44.7663 10.9219 44.5183 11.3727 44.5183 11.9383C44.5183 12.3448 44.6295 12.6939 44.8519 12.9856C45.0742 13.2684 45.4248 13.5291 45.9038 13.7677C46.3827 13.9975 47.0283 14.2273 47.8408 14.4571C49.3374 14.8725 50.4277 15.3983 51.1119 16.0347C51.8046 16.6622 52.151 17.5018 52.151 18.5535C52.151 19.4107 51.9543 20.1576 51.5609 20.7939C51.1675 21.4302 50.5945 21.9251 49.8419 22.2787C49.0979 22.6233 48.2085 22.7957 47.1737 22.7957Z" fill="white" fill-opacity="0.2"/><path d="M61.3999 22.7957C59.8862 22.7957 58.5906 22.4996 57.513 21.9075C56.4355 21.3153 55.6145 20.4625 55.0501 19.3489C54.4856 18.2353 54.2034 16.9052 54.2034 15.3586C54.2034 13.9003 54.4728 12.6232 55.0116 11.5273C55.5589 10.4314 56.32 9.58741 57.295 8.99527C58.2784 8.39429 59.4116 8.0938 60.6944 8.0938C61.8745 8.0938 62.935 8.36778 63.8757 8.91573C64.8249 9.46368 65.5775 10.237 66.1334 11.2357C66.6893 12.2255 66.9843 13.37 67.0185 14.6692V15.0802C67.0185 15.5044 67.0057 15.9154 66.98 16.3131H56.5125C56.5296 17.7713 56.9785 18.8849 57.8594 19.6538C58.7488 20.4139 59.9717 20.7939 61.5282 20.7939C62.2123 20.7939 62.9221 20.6967 63.6576 20.5022C64.3931 20.3078 65.0815 20.0206 65.7229 19.6405L66.1206 21.417C64.7095 22.3361 63.1359 22.7957 61.3999 22.7957ZM64.748 14.5101C64.748 13.6528 64.5769 12.8884 64.2349 12.2167C63.8928 11.545 63.4182 11.0236 62.811 10.6524C62.2123 10.2723 61.5324 10.0823 60.7713 10.0823C59.9845 10.0823 59.2705 10.2723 58.6291 10.6524C57.9877 11.0236 57.4745 11.5494 57.0897 12.2299C56.7134 12.9016 56.5167 13.6617 56.4996 14.5101H64.748Z" fill="white" fill-opacity="0.2"/><path d="M81.5141 22.5305H79.3205V14.2317C79.3205 12.8353 79.0169 11.788 78.4097 11.0899C77.8025 10.3917 76.9131 10.0426 75.7415 10.0426C75.083 10.0426 74.4844 10.2414 73.9456 10.6391C73.4154 11.028 72.9963 11.5583 72.6885 12.2299C72.3891 12.9016 72.2395 13.6308 72.2395 14.4173V22.5305H70.0459V8.34568H72.2395V10.7982H72.3549C72.7056 9.94976 73.2486 9.28692 73.9841 8.80967C74.7196 8.33242 75.532 8.0938 76.4214 8.0938C78.0719 8.0938 79.3333 8.57989 80.2056 9.55206C81.0779 10.5242 81.5141 11.9206 81.5141 13.7412V22.5305Z" fill="white" fill-opacity="0.2"/><path d="M91.507 22.2787C91.2248 22.3582 90.8956 22.4201 90.5193 22.4642C90.1516 22.5084 89.8309 22.5305 89.5572 22.5305H89.5444C87.4064 22.5305 86.3374 21.4037 86.3374 19.15V10.5728H84.1438V8.5843H86.3374V5.19055L88.5181 4.39513V8.5843H91.4044V10.5728H88.5181V18.7656C88.5181 19.2252 88.5652 19.5831 88.6592 19.8394C88.7619 20.0868 88.9115 20.2636 89.1082 20.3697C89.3049 20.4669 89.5786 20.5243 89.9292 20.542C90.5877 20.5243 91.1136 20.4625 91.507 20.3564V22.2787Z" fill="white" fill-opacity="0.2"/><path d="M100.705 22.7957C99.191 22.7957 97.8953 22.4996 96.8178 21.9075C95.7403 21.3153 94.9193 20.4625 94.3548 19.3489C93.7904 18.2353 93.5082 16.9052 93.5082 15.3586C93.5082 13.9003 93.7776 12.6232 94.3164 11.5273C94.8637 10.4314 95.6248 9.58741 96.5997 8.99527C97.5832 8.39429 98.7163 8.0938 99.9991 8.0938C101.179 8.0938 102.24 8.36778 103.18 8.91573C104.13 9.46368 104.882 10.237 105.438 11.2357C105.994 12.2255 106.289 13.37 106.323 14.6692V15.0802C106.323 15.5044 106.31 15.9154 106.285 16.3131H95.8172C95.8343 17.7713 96.2833 18.8849 97.1642 19.6538C98.0536 20.4139 99.2765 20.7939 100.833 20.7939C101.517 20.7939 102.227 20.6967 102.962 20.5022C103.698 20.3078 104.386 20.0206 105.028 19.6405L105.425 21.417C104.014 22.3361 102.441 22.7957 100.705 22.7957ZM104.053 14.5101C104.053 13.6528 103.882 12.8884 103.54 12.2167C103.198 11.545 102.723 11.0236 102.116 10.6524C101.517 10.2723 100.837 10.0823 100.076 10.0823C99.2893 10.0823 98.5752 10.2723 97.9338 10.6524C97.2924 11.0236 96.7793 11.5494 96.3945 12.2299C96.0182 12.9016 95.8215 13.6617 95.8044 14.5101H104.053Z" fill="white" fill-opacity="0.2"/><path d="M119.292 3.01642H121.473V22.5173H119.292V20.0913H119.19C118.754 20.8955 118.146 21.5451 117.368 22.04C116.59 22.535 115.666 22.7824 114.597 22.7824C113.468 22.7824 112.451 22.4819 111.544 21.8809C110.638 21.28 109.928 20.4448 109.415 19.3754C108.902 18.2972 108.645 17.0687 108.645 15.69C108.645 14.2141 108.906 12.9016 109.428 11.7527C109.949 10.5949 110.668 9.69788 111.583 9.06155C112.498 8.41638 113.524 8.0938 114.661 8.0938C115.662 8.0938 116.56 8.34568 117.355 8.84944C118.151 9.3532 118.771 10.0514 119.215 10.944H119.292V3.01642ZM114.982 21.0458C115.863 21.0458 116.628 20.8071 117.278 20.3299C117.928 19.8526 118.424 19.2384 118.766 18.4872C119.117 17.7271 119.292 16.9317 119.292 16.101V15.279C119.284 14.298 119.091 13.401 118.715 12.5879C118.347 11.766 117.843 11.1164 117.201 10.6391C116.56 10.1619 115.846 9.92325 115.059 9.92325C114.289 9.92325 113.584 10.1707 112.943 10.6656C112.301 11.1517 111.788 11.8322 111.403 12.7072C111.027 13.5821 110.839 14.5764 110.839 15.69C110.839 16.724 111.023 17.6476 111.39 18.4607C111.767 19.2738 112.271 19.9101 112.904 20.3697C113.537 20.8204 114.23 21.0458 114.982 21.0458Z" fill="white" fill-opacity="0.2"/><path d="M145.218 20.1973L148.771 8.34568H150.99L146.706 22.5173L143.909 22.5305L141.793 16.0877L139.073 22.5305H136.725L131.492 8.34568H133.749L138.008 20.1973H138.111L140.933 13.4761L139.24 8.33242H141.344L145.115 20.1973H145.218Z" fill="white" fill-opacity="0.2"/><path d="M155.711 5.37614H153.299V2.88385H155.711V5.37614ZM155.608 22.5305H153.415V8.34568H155.608V22.5305Z" fill="white" fill-opacity="0.2"/><path d="M165.832 22.2787C165.55 22.3582 165.221 22.4201 164.844 22.4642C164.477 22.5084 164.156 22.5305 163.882 22.5305H163.869C161.731 22.5305 160.662 21.4037 160.662 19.15V10.5728H158.469V8.5843H160.662V5.19055L162.843 4.39513V8.5843H165.729V10.5728H162.843V18.7656C162.843 19.2252 162.89 19.5831 162.984 19.8394C163.087 20.0868 163.237 20.2636 163.433 20.3697C163.63 20.4669 163.904 20.5243 164.254 20.542C164.913 20.5243 165.439 20.4625 165.832 20.3564V22.2787Z" fill="white" fill-opacity="0.2"/><path d="M180.007 22.5305H177.813V14.2317C177.813 12.8442 177.51 11.8013 176.903 11.1031C176.304 10.3961 175.427 10.0426 174.273 10.0426C173.64 10.0426 173.063 10.2193 172.541 10.5728C172.019 10.9264 171.6 11.408 171.284 12.0178C170.968 12.6277 170.784 13.2993 170.732 14.0329V22.5305H168.539V3.01642H170.732V10.8512H170.822C171.173 9.98511 171.716 9.30901 172.451 8.82293C173.187 8.33684 173.999 8.0938 174.889 8.0938C176.548 8.0938 177.813 8.57989 178.686 9.55206C179.566 10.5242 180.007 11.9206 180.007 13.7412V22.5305Z" fill="white" fill-opacity="0.2"/><path d="M203.351 8.12962L199.279 14.7542L203.377 22.2477H198.806L196.021 17.3064L193.053 22.2477H188.481L192.79 14.7542L188.586 8.12962H193.105L196.048 12.8537L198.727 8.12962H203.351Z" fill="white" fill-opacity="0.2"/><path d="M205.49 8.12962V22.2477H209.641V14.7814V14.347C209.641 12.8266 210.744 11.4962 212.005 11.4962C213.372 11.4962 214.265 12.5279 214.265 14.1298V22.2477H218.416V14.347C218.416 12.8266 219.44 11.4962 220.649 11.4962C222.068 11.4962 222.987 12.5279 222.987 14.1298V22.2477H227.138V14.0755C227.138 11.7677 226.586 7.58662 221.91 7.58662C219.729 7.58662 218.258 8.69978 217.575 10.003C216.734 8.42828 215.237 7.58662 213.188 7.58662C211.322 7.58662 210.061 8.37398 209.431 9.48713L208.722 8.12962H205.49Z" fill="white" fill-opacity="0.2"/><path d="M229.287 8.12962V22.2477H233.438V8.12962H229.287ZM228.735 3.75846C228.735 5.25172 229.918 6.47347 231.389 6.47347C232.807 6.47347 233.99 5.25172 233.99 3.75846C233.99 2.29236 232.807 1.04346 231.389 1.04346C229.918 1.04346 228.735 2.29236 228.735 3.75846Z" fill="white" fill-opacity="0.2"/><path d="M235.841 8.12962V22.2477H239.992V14.347C239.992 12.8266 241.095 11.4962 242.356 11.4962C243.801 11.4962 244.616 12.4465 244.616 14.1298V22.2477H248.767V13.9397C248.767 9.84008 246.901 7.58662 243.539 7.58662C241.673 7.58662 240.412 8.37398 239.782 9.48713L239.072 8.12962H235.841Z" fill="white" fill-opacity="0.2"/><path d="M257.358 22.5463C258.987 22.5463 260.511 21.949 261.693 20.9173L262.429 22.2477H265.555V3.94851L261.404 2.48241V8.97128C260.248 8.10248 258.856 7.58662 257.358 7.58662C253.47 7.58662 250.344 10.9261 250.344 15.08C250.344 19.2069 253.47 22.5463 257.358 22.5463ZM254.468 14.9986C254.468 12.9895 256.018 11.3605 257.989 11.3605C259.959 11.3605 261.535 12.9895 261.535 14.9986C261.535 17.062 259.959 18.6639 257.989 18.6639C256.018 18.6639 254.468 17.062 254.468 14.9986Z" fill="white" fill-opacity="0.2"/></svg>',
        },
        l = {
          big: { width: 263, height: 20 },
          normal: { width: 197, height: 15 },
          small: { width: 131, height: 11 },
        };
      function d(e) {
        const t = r[e];
        return `data:image/svg+xml;base64,${Buffer.from(t).toString("base64")}`;
      }
      function c(e = "") {
        var t;
        const { sheets: i } = (0, o.nZ)();
        if (!i.value || !i.value.length) return;
        const r = i.value.find((t) => t.id === e),
          l =
            null !== (t = r.fillColor) && void 0 !== t
              ? t
              : (function (e) {
                  var t, i, r, l, d, c;
                  const s =
                    null ===
                      (t = (0, a.fl)().smartColorThemes.find((t) =>
                        t.idList.includes(e)
                      )) || void 0 === t
                      ? void 0
                      : t.id;
                  if (s) {
                    const t = (0, n.B6)(s, e);
                    return null ===
                      (r =
                        null === (i = null == t ? void 0 : t.theme) ||
                        void 0 === i
                          ? void 0
                          : i.map) || void 0 === r
                      ? void 0
                      : r.fillColor;
                  }
                  {
                    const t = o.HG.getColorThemeById(e);
                    return (null === (l = null == t ? void 0 : t.theme) ||
                    void 0 === l
                      ? void 0
                      : l.map) && "fillColor" in t.theme.map
                      ? null ===
                          (c =
                            null === (d = null == t ? void 0 : t.theme) ||
                            void 0 === d
                              ? void 0
                              : d.map) || void 0 === c
                        ? void 0
                        : c.fillColor
                      : void 0;
                  }
                })(r.colorThemeId);
        return l ? l.slice(0, 7) : "#FFFFFF";
      }
      function s() {
        return { url: d("print-watermark-dark-small"), ...l.small };
      }
    },
    32652: (e, t, i) => {
      i.d(t, { X: () => l });
      var o = i(77412),
        a = i(2954),
        n = i(87141);
      const r = ["editor.addSubTopic", "editor.addTopic", "editor.showEditBox"],
        l = (0, o.Q_)("tutorial", () => {
          const e = (0, a.iH)(0),
            t = (0, a.iH)(!0),
            i = (0, a.Fl)(() =>
              r.map((e) => ({ key: (0, n.f7)().keybindingByCommandId(e) }))
            ),
            o = (0, a.Fl)(() =>
              (0, n.f7)().keybindingByCommandId(r[e.value > 2 ? 2 : e.value])
            );
          return {
            step: e,
            actionMode: t,
            next: () => {
              e.value !== r.length &&
                (e.value !== r.length - 1
                  ? ((t.value = !1),
                    setTimeout(() => {
                      e.value++, (t.value = !0);
                    }, 1100))
                  : e.value++);
            },
            tutoriallist: i,
            currentKey: o,
            changeMode: (e) => (t.value = e),
            changeStep: (t) => (e.value = t),
          };
        });
    },
    50743: (e, t, i) => {
      i.d(t, { lE: () => M, HV: () => d, ZV: () => s });
      var o = i(2954),
        a = i(46016),
        n = i(87141),
        r = i(18621),
        l = i(84374);
      const d = () => {
          const {
              markerModule: e,
              styles: t,
              executePropertyAction: i,
            } = (0, l.nZ)(),
            d = (0, o.Fl)(() => (0, n.S)().language),
            c = (0, o.Fl)(() => (0, a.$)().isOutlinerMode),
            s = (0, o.Fl)(() => {
              var e;
              return !!(null === (e = t.value) || void 0 === e
                ? void 0
                : e.legendVisible.value);
            });
          return {
            markerGroups: (0, o.Fl)(() => {
              const { getMarkerGroups: t, getMarkerInfoById: i } = e;
              return t({ lang: d.value }).reduce((e, t) => {
                if (t.hidden) return e;
                const o = [];
                for (const e of t.markerIds) {
                  if (t.hidden) continue;
                  const a = i(e);
                  if (!a) continue;
                  if (a.hidden) continue;
                  let n = a.imageSrc;
                  (n = n.split("\\").join("/")),
                    o.push({
                      id: e,
                      markerUrl: n,
                      backgroundImage: `url("${n}")`,
                    });
                }
                return [...e, { id: t.id, title: t.name, markers: o }];
              }, []);
            }),
            isOutlineMode: c,
            isLegendEnabled: s,
            addMarker: (e, t) => {
              (0, r.L9)({ eventName: t.title, eventAction: "insertMarker" });
              const { id: i } = e;
              i && (0, n.JX)().handleCommand("editor.addMarker", { value: i });
            },
            toggleLegend: () => {
              const e = s.value;
              i({ name: "mutateProperty:legendVisible", inputValue: !e }),
                e ||
                  (0, r.L9)({
                    eventCategory: "FormatMap",
                    eventAction: "toggleLegendDisplay",
                  });
            },
          };
        },
        c = (e, t) => {
          const { name: i, resource: o, relativeResource: a } = t || {};
          i &&
            o &&
            (e.dataTransfer.clearData(), e.dataTransfer.setData("xapsvg", a));
        },
        s = () => {
          const { stickerModule: e, createXapUrl: t } = (0, l.nZ)(),
            { T: i } = (0, n.JE)(),
            a = (0, o.Fl)(() => (0, n.S)().language),
            r = (0, o.Fl)(() => {
              const { getBuiltInImageGroups: t } = e;
              return t({ lang: a.value });
            }),
            d = (0, o.Fl)(() =>
              [{ value: "all", label: i("All") }].concat(
                r.value.map((e) => ({ value: e.name, label: i("$$", e.name) }))
              )
            ),
            s = (0, o.iH)("all");
          return {
            stickerGroups: d,
            currStickerGroup: (0, o.Fl)(() =>
              "all" === s.value
                ? r.value
                : [r.value.find(({ name: e }) => s.value === e)]
            ),
            currCategory: s,
            changeImage: async (e) => {
              const i = await t(e);
              (0, n.JX)().handleCommand("editor.changeImage", { value: i });
            },
            ondragstart: c,
            handleCategoryChanged: (e) => {
              s.value = e;
            },
          };
        };
      var u = i(23279),
        h = i.n(u),
        p = i(71017),
        m = i.n(p),
        g = i(54856),
        C = i(81296),
        v = i.n(C),
        b = i(90435),
        f = i(7104),
        w = i(23352),
        y = i(20993),
        T = i(89019);
      const I = (0, w.ZP)("illustration"),
        k = () => {
          const { illustrationModule: e, createXapUrl: t } = (0, l.nZ)(),
            i = (0, f.O1)(),
            a = (0, o.iH)(""),
            r = (0, o.iH)(""),
            d = (0, o.iH)(""),
            c = (0, o.iH)([]),
            s = (0, o.iH)([]),
            u = (0, o.iH)(!1),
            p = (0, o.iH)(0),
            C = (0, o.Fl)(() => (0, n.S)().language),
            w = (0, o.Fl)(() => {
              const {
                getLocalIllustrationsContent: t,
                getTranslatedIllustrationsContent: i,
              } = e;
              let o = c.value;
              return 0 === o.length && (o = t()), i(o, C.value);
            }),
            k = (0, o.Fl)(() => {
              const { getIllustrationGroups: t } = e;
              return t(w.value);
            }),
            M = (0, o.Fl)(() => {
              if ("" === d.value) return [];
              const { getIllustrationsByGroupId: t } = e;
              return t(d.value, w.value);
            }),
            E = (0, o.Fl)(() => {
              if (!r.value) return [];
              const { searchIllustrationsByTag: t } = e;
              return t(r.value, w.value, d.value);
            }),
            x = (0, o.Fl)(() => k.value.find((e) => e.id === d.value)),
            S = (e) => {
              u.value = e;
            },
            H = h()((e) => {
              (r.value = e), (0, y.NK)(e);
            }, 200),
            L = (e, t) => {
              let i = s.value;
              switch (t) {
                case "add":
                  i = Array.from(new Set(s.value.concat(e)));
                  break;
                case "remove":
                  i = s.value.filter((t) => t !== e);
              }
              s.value = i;
            },
            V = async (e, t) => {
              const o = m().join(i, e);
              await v().ensureDir(m().dirname(o)), await v().writeFile(o, t);
            };
          return {
            illustrationsPath: i,
            illustrationGroups: k,
            illustrationGroupDetails: M,
            illustrationSearchGroups: E,
            illustrationActiveGroupId: d,
            activeIllustrationGroup: x,
            illustrationSearchValue: a,
            debounceIllustrationSearchValue: r,
            hasIllustrationLoadFaild: u,
            downloadingIllustrations: s,
            getAllIllustrationsContent: async () => {
              try {
                const e = await b.ZP.fetch(g.lf.FETCH_ILLUSTRATIONS);
                (c.value = e),
                  await V("all-content.json", JSON.stringify(e)),
                  S(!1);
              } catch (e) {
                I.error(e);
                const t = m().join(i, "all-content.json");
                if (v().existsSync(t)) {
                  const e = await (async (e) => {
                      const t = m().join(i, e);
                      return await v().readFile(t);
                    })("all-content.json"),
                    t = JSON.parse(e.toString());
                  c.value = t;
                } else S(!0);
              }
            },
            changeImage: async (e) => {
              var o;
              if ("pro" === e.license) {
                if (
                  !(await b.ZP.fetch(g.Gy, {
                    name: "action.changeIllustration",
                    channel: (0, g.gk)(window.editorId),
                  }))
                )
                  return void (0, y.Zk)(e.id);
              }
              const a = `${e.hash}.png`,
                r = m().join(i, "original", a);
              if (
                "server" === e.host &&
                !v().existsSync(r) &&
                !s.value.includes(e.id)
              )
                try {
                  const t =
                    null === (o = (0, T.c)().cloudFileMeta) || void 0 === o
                      ? void 0
                      : o.teamId;
                  L(e.id, "add");
                  const i = await b.ZP.fetch(g.lf.DOWNLOAD_ILLUSTRATION, {
                    hash: e.hash,
                    teamId: t || (0, n.Yh)().findUpgradeTeamId(),
                  });
                  await V(m().join("original", a), i), L(e.id, "remove");
                } catch (t) {
                  I.error(t), S(!0), L(e.id, "remove");
                }
              const l = await t("local" === e.host ? e.relativeResource : r);
              (0, n.JX)().handleCommand("editor.changeImage", { value: l }),
                (0, y.p3)(e.id);
            },
            changeIllustrationSearchValue: (e) => {
              "" === e && "" === d.value && S(!1), (a.value = e), H(e);
            },
            changeIllustrationActiveGroupId: async (e) => {
              "" === e
                ? (S(!1),
                  setTimeout(() => {
                    document
                      .querySelector(".illustration-panel-container")
                      .scrollTo({ top: p.value });
                  }))
                : ((p.value = document.querySelector(
                    ".illustration-panel-container"
                  ).scrollTop),
                  setTimeout(() => {
                    document
                      .querySelector(".illustration-details-container")
                      .scrollTo({ top: 0 });
                  })),
                (d.value = e);
            },
            changeHasIllustrationLoadFaild: S,
            saveIllustrationsFile: V,
            onDragStart: (e, t, i) => {
              e.dataTransfer.clearData(),
                "local" === t.host && t.relativeResource.endsWith(".svg")
                  ? e.dataTransfer.setData("xapsvg", t.relativeResource)
                  : e.dataTransfer.setData(
                      "xappng",
                      "local" === t.host ? t.relativeResource : i
                    );
            },
          };
        },
        M = (() => {
          const e = Symbol("default-illustration"),
            t = new Map();
          return (i = e) => {
            if (t.has(i)) return t.get(i);
            const o = k();
            return t.set(i, o), o;
          };
        })();
    },
    99020: (e) => {
      e.exports = require("evernote");
    },
    6851: (e) => {
      e.exports = require("ncp");
    },
    30053: (e) => {
      e.exports = require("posthtml");
    },
    50852: (e) => {
      e.exports = require("async_hooks");
    },
    14300: (e) => {
      e.exports = require("buffer");
    },
    6113: (e) => {
      e.exports = require("crypto");
    },
    72298: (e) => {
      e.exports = require("electron");
    },
    82361: (e) => {
      e.exports = require("events");
    },
    57147: (e) => {
      e.exports = require("fs");
    },
    95687: (e) => {
      e.exports = require("https");
    },
    22037: (e) => {
      e.exports = require("os");
    },
    71017: (e) => {
      e.exports = require("path");
    },
    77282: (e) => {
      e.exports = require("process");
    },
    85477: (e) => {
      e.exports = require("punycode");
    },
    63477: (e) => {
      e.exports = require("querystring");
    },
    12781: (e) => {
      e.exports = require("stream");
    },
    71576: (e) => {
      e.exports = require("string_decoder");
    },
    57310: (e) => {
      e.exports = require("url");
    },
    73837: (e) => {
      e.exports = require("util");
    },
  },
  (e) => {
    e.O(0, [8592, 8970, 8495, 2517, 4245, 8663, 1382, 5110], () => {
      return (t = 97166), e((e.s = t));
      var t;
    });
    var t = e.O();
    module.exports = t;
  },
]);
