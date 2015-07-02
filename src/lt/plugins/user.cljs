(ns lt.plugins.user
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.context :as ctx])
  (:require-macros [lt.macros :refer [defui behavior]]))

;; UI to be associated with an object
(defui hello-panel [this]
  [:h1 "Hello World!"])

;; Define an object prototype
(object/object* ::user.hello
                :tags [:user.hello]
                :behaviors [::on-close-destroy]
                :init (fn [this]
                        (hello-panel this)))

;; Currently used by :user.hello but could be reused by any
;; object with a declaration in user.behaviors.
(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (object/raise this :destroy)))

(def hello (object/create ::user.hello))

;; Create a user command. Commands can call any function
;; and be bound to any keystroke.
;; (cmd/command {:command :user.say-hello
;;               :desc "User: Say Hello"
;;               :exec (fn []
;;                       (tabs/add-or-focus! hello))})

(cmd/command {:command :tabset.wipe
              :desc "Tabset: Wipe tabs from tabset"
              :exec (fn []
                      (let [ts (ctx/->obj :tabset)]
                          (doseq [obj (:objs @ts)]
                            (object/raise obj :close))))})

;;  Hack night things:
;;  -  increase delay for considering file deleted
;;  -  directory names: tabs.cljs: ->path, change ->name or dom stuff
;;  -  de-inject css
;;  -  check atom shell performance
;;  -  folding, open view/markdown in next tabset
;;  -  capitalize: hook codemirror
;;  -  cmd-d select with '-'
