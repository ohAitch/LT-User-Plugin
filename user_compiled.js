if(!lt.util.load.provided_QMARK_('lt.plugins.user')) {
goog.provide('lt.plugins.user');
goog.require('cljs.core');
goog.require('lt.objs.context');
goog.require('lt.objs.context');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.tabs');
goog.require('lt.objs.tabs');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.user.hello_panel = (function hello_panel(this$){var e__7762__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Hello World!"], null));var seq__7852_7872 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__7853_7873 = null;var count__7854_7874 = 0;var i__7855_7875 = 0;while(true){
if((i__7855_7875 < count__7854_7874))
{var vec__7856_7876 = cljs.core._nth.call(null,chunk__7853_7873,i__7855_7875);var ev__7763__auto___7877 = cljs.core.nth.call(null,vec__7856_7876,0,null);var func__7764__auto___7878 = cljs.core.nth.call(null,vec__7856_7876,1,null);lt.util.dom.on.call(null,e__7762__auto__,ev__7763__auto___7877,func__7764__auto___7878);
{
var G__7879 = seq__7852_7872;
var G__7880 = chunk__7853_7873;
var G__7881 = count__7854_7874;
var G__7882 = (i__7855_7875 + 1);
seq__7852_7872 = G__7879;
chunk__7853_7873 = G__7880;
count__7854_7874 = G__7881;
i__7855_7875 = G__7882;
continue;
}
} else
{var temp__4126__auto___7883 = cljs.core.seq.call(null,seq__7852_7872);if(temp__4126__auto___7883)
{var seq__7852_7884__$1 = temp__4126__auto___7883;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7852_7884__$1))
{var c__7119__auto___7885 = cljs.core.chunk_first.call(null,seq__7852_7884__$1);{
var G__7886 = cljs.core.chunk_rest.call(null,seq__7852_7884__$1);
var G__7887 = c__7119__auto___7885;
var G__7888 = cljs.core.count.call(null,c__7119__auto___7885);
var G__7889 = 0;
seq__7852_7872 = G__7886;
chunk__7853_7873 = G__7887;
count__7854_7874 = G__7888;
i__7855_7875 = G__7889;
continue;
}
} else
{var vec__7857_7890 = cljs.core.first.call(null,seq__7852_7884__$1);var ev__7763__auto___7891 = cljs.core.nth.call(null,vec__7857_7890,0,null);var func__7764__auto___7892 = cljs.core.nth.call(null,vec__7857_7890,1,null);lt.util.dom.on.call(null,e__7762__auto__,ev__7763__auto___7891,func__7764__auto___7892);
{
var G__7893 = cljs.core.next.call(null,seq__7852_7884__$1);
var G__7894 = null;
var G__7895 = 0;
var G__7896 = 0;
seq__7852_7872 = G__7893;
chunk__7853_7873 = G__7894;
count__7854_7874 = G__7895;
i__7855_7875 = G__7896;
continue;
}
}
} else
{}
}
break;
}
return e__7762__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.user","user.hello","lt.plugins.user/user.hello",3780889681),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user.hello","user.hello",1535287393)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.user","on-close-destroy","lt.plugins.user/on-close-destroy",4509098889)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.user.hello_panel.call(null,this$);
}));
lt.plugins.user.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.user","on-close-destroy","lt.plugins.user/on-close-destroy",4509098889),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.user.__BEH__on_close_destroy);
lt.plugins.user.hello = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.user","user.hello","lt.plugins.user/user.hello",3780889681));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"user.say-hello","user.say-hello",576535935),new cljs.core.Keyword(null,"desc","desc",1016984067),"User: Say Hello",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.user.hello);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tabset.wipe","tabset.wipe",1472522330),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabset: Wipe tabs from tabset",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (t){var ts = lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"tabset","tabset",4427500575));var seq__7858 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts)));var chunk__7859 = null;var count__7860 = 0;var i__7861 = 0;while(true){
if((i__7861 < count__7860))
{var obj = cljs.core._nth.call(null,chunk__7859,i__7861);lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__7897 = seq__7858;
var G__7898 = chunk__7859;
var G__7899 = count__7860;
var G__7900 = (i__7861 + 1);
seq__7858 = G__7897;
chunk__7859 = G__7898;
count__7860 = G__7899;
i__7861 = G__7900;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__7858);if(temp__4126__auto__)
{var seq__7858__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7858__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__7858__$1);{
var G__7901 = cljs.core.chunk_rest.call(null,seq__7858__$1);
var G__7902 = c__7119__auto__;
var G__7903 = cljs.core.count.call(null,c__7119__auto__);
var G__7904 = 0;
seq__7858 = G__7901;
chunk__7859 = G__7902;
count__7860 = G__7903;
i__7861 = G__7904;
continue;
}
} else
{var obj = cljs.core.first.call(null,seq__7858__$1);lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"close","close",1108660586));
{
var G__7905 = cljs.core.next.call(null,seq__7858__$1);
var G__7906 = null;
var G__7907 = 0;
var G__7908 = 0;
seq__7858 = G__7905;
chunk__7859 = G__7906;
count__7860 = G__7907;
i__7861 = G__7908;
continue;
}
}
} else
{return null;
}
}
break;
}
})], null));
}

//# sourceMappingURL=user_compiled.js.map