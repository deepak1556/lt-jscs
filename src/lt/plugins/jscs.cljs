(ns lt.plugins.jscs
  (:require [lt.object :as object]
            [lt.objs.files :as files]
            [lt.objs.plugins :as plugins]
            [lt.objs.command :as cmd]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.thread :as thread])
  (:require-macros [lt.macros :refer [defui background]]))

(def jscs-path (files/join plugins/*plugin-dir* "node_modules/jscs/lib/checker"))
(def config-path (files/join plugins/*plugin-dir* ".jscs.json"))

(def errors (background (fn [obj-id jscs-path config-path code]
                          (let [jscs (js/require jscs-path)]
                            (let [checker (jscs)])
                            (.registerDefaultRules checker)
                            (.configure (js/require config-path) checker)
                            (let [errs (.checkString [code] checker)]
                              (def err_desc [])
                              (conj err_desc (map #(err) errs))
                              (.log js/console (.explainError [first err_desc] errs)))))))

(defui mark [errors spacing]
  [:div.hintwrapper
   [:span.spacer spacing]
   [:ul {:class "errors"}
    (for [e errors]
      [:li (:reason e (:raw e))])]])

(defn ->spacing [text]
  (when text
    (-> (re-seq #"^\s+" text)
        (first))))

(object/behavior* ::on-change
                  :debounce 750
                  :type :user
                  :desc "JSCS: Run JSCS on change"
                  :triggers #{:change}
                  :reaction (fn [this]
                              ()))

(object/behavior* ::on-save
                  :triggers #{:save}
                  :type :user
                  :desc "JSCS: Run JSCS on save"
                  :reaction (fn [this]
                              ()))

(cmd/command {:command :jscs.run
              :desc "JSCS: Run jscs on current editor"
              :exec (fn [this]
                      (when-let [ed (pool/last-active)]
                        (errors ed jscs-path config-path (editor/->val ed))))})
