if(!lt.util.load.provided_QMARK_('lt.plugins.jscs')) {
goog.provide('lt.plugins.jscs');
goog.require('cljs.core');
goog.require('lt.objs.thread');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.thread');
goog.require('lt.objs.plugins');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.jscs.jscs_path = lt.objs.files.join.call(null,lt.objs.plugins._STAR_plugin_dir_STAR_,"node_modules/jscs/lib/checker");
lt.plugins.jscs.config_path = lt.objs.files.join.call(null,lt.objs.plugins._STAR_plugin_dir_STAR_,".jscs.json");
lt.plugins.jscs.errors = lt.objs.thread.thread_STAR_.call(null,(function tfun7840(){var orig__7828__auto__ = argsArray(arguments);var msg__7829__auto__ = orig__7828__auto__.shift();var args__7830__auto__ = orig__7828__auto__.map(cljs.reader.read_string);var raise = ((function (orig__7828__auto__,msg__7829__auto__,args__7830__auto__){
return (function (obj__7831__auto__,k__7832__auto__,v__7833__auto__){return _send(obj__7831__auto__,k__7832__auto__,cljs.core.pr_str.call(null,v__7833__auto__),"clj");
});})(orig__7828__auto__,msg__7829__auto__,args__7830__auto__))
;args__7830__auto__.unshift(msg__7829__auto__.obj);
return ((function (orig__7828__auto__,msg__7829__auto__,args__7830__auto__,raise){
return (function (obj_id,jscs_path,config_path,code){var checker = require(jscs_path);checker.registerDefaultRules();
require(config_path).configure(checker);
var errs = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [code], null).checkString(checker);lt.plugins.jscs.err_desc = cljs.core.PersistentVector.EMPTY;
cljs.core.conj.call(null,lt.plugins.jscs.err_desc,cljs.core.map.call(null,((function (errs,checker,orig__7828__auto__,msg__7829__auto__,args__7830__auto__,raise){
return (function (p1__7839_SHARP_){return p1__7839_SHARP_.call(null);
});})(errs,checker,orig__7828__auto__,msg__7829__auto__,args__7830__auto__,raise))
,errs));
return console.log(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first,lt.plugins.jscs.err_desc], null).explainError(errs));
});})(orig__7828__auto__,msg__7829__auto__,args__7830__auto__,raise))
.apply(null,args__7830__auto__);
}));
lt.plugins.jscs.mark = (function mark(errors,spacing){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hintwrapper","div.hintwrapper",570322369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.spacer","span.spacer",4763675330),spacing], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"errors"], null),(function (){var iter__7081__auto__ = (function iter__7851(s__7852){return (new cljs.core.LazySeq(null,(function (){var s__7852__$1 = s__7852;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7852__$1);if(temp__4092__auto__)
{var s__7852__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7852__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__7852__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__7854 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__7853 = 0;while(true){
if((i__7853 < size__7080__auto__))
{var e = cljs.core._nth.call(null,c__7079__auto__,i__7853);cljs.core.chunk_append.call(null,b__7854,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.Keyword(null,"reason","reason",4373906870).cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"raw","raw",1014016922).cljs$core$IFn$_invoke$arity$1(e))], null));
{
var G__7871 = (i__7853 + 1);
i__7853 = G__7871;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7854),iter__7851.call(null,cljs.core.chunk_rest.call(null,s__7852__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7854),null);
}
} else
{var e = cljs.core.first.call(null,s__7852__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.Keyword(null,"reason","reason",4373906870).cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"raw","raw",1014016922).cljs$core$IFn$_invoke$arity$1(e))], null),iter__7851.call(null,cljs.core.rest.call(null,s__7852__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__7081__auto__.call(null,errors);
})()], null)], null));var seq__7855_7872 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__7856_7873 = null;var count__7857_7874 = 0;var i__7858_7875 = 0;while(true){
if((i__7858_7875 < count__7857_7874))
{var vec__7859_7876 = cljs.core._nth.call(null,chunk__7856_7873,i__7858_7875);var ev__7756__auto___7877 = cljs.core.nth.call(null,vec__7859_7876,0,null);var func__7757__auto___7878 = cljs.core.nth.call(null,vec__7859_7876,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___7877,func__7757__auto___7878);
{
var G__7879 = seq__7855_7872;
var G__7880 = chunk__7856_7873;
var G__7881 = count__7857_7874;
var G__7882 = (i__7858_7875 + 1);
seq__7855_7872 = G__7879;
chunk__7856_7873 = G__7880;
count__7857_7874 = G__7881;
i__7858_7875 = G__7882;
continue;
}
} else
{var temp__4092__auto___7883 = cljs.core.seq.call(null,seq__7855_7872);if(temp__4092__auto___7883)
{var seq__7855_7884__$1 = temp__4092__auto___7883;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7855_7884__$1))
{var c__7112__auto___7885 = cljs.core.chunk_first.call(null,seq__7855_7884__$1);{
var G__7886 = cljs.core.chunk_rest.call(null,seq__7855_7884__$1);
var G__7887 = c__7112__auto___7885;
var G__7888 = cljs.core.count.call(null,c__7112__auto___7885);
var G__7889 = 0;
seq__7855_7872 = G__7886;
chunk__7856_7873 = G__7887;
count__7857_7874 = G__7888;
i__7858_7875 = G__7889;
continue;
}
} else
{var vec__7860_7890 = cljs.core.first.call(null,seq__7855_7884__$1);var ev__7756__auto___7891 = cljs.core.nth.call(null,vec__7860_7890,0,null);var func__7757__auto___7892 = cljs.core.nth.call(null,vec__7860_7890,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___7891,func__7757__auto___7892);
{
var G__7893 = cljs.core.next.call(null,seq__7855_7884__$1);
var G__7894 = null;
var G__7895 = 0;
var G__7896 = 0;
seq__7855_7872 = G__7893;
chunk__7856_7873 = G__7894;
count__7857_7874 = G__7895;
i__7858_7875 = G__7896;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.jscs.__GT_spacing = (function __GT_spacing(text){if(cljs.core.truth_(text))
{return cljs.core.first.call(null,cljs.core.re_seq.call(null,/^\s+/,text));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.jscs","on-change","lt.plugins.jscs/on-change",2794532520),new cljs.core.Keyword(null,"debounce","debounce",1556599227),750,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"desc","desc",1016984067),"JSCS: Run JSCS on change",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change","change",3947235106),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){return cljs.core.List.EMPTY;
}));
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.jscs","on-save","lt.plugins.jscs/on-save",3573351643),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save","save",1017427183),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"desc","desc",1016984067),"JSCS: Run JSCS on save",new cljs.core.Keyword(null,"reaction","reaction",4441361819),(function (this$){return cljs.core.List.EMPTY;
}));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"jscs.run","jscs.run",2993888776),new cljs.core.Keyword(null,"desc","desc",1016984067),"JSCS: Run jscs on current editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (this$){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.plugins.jscs.errors.call(null,ed,lt.plugins.jscs.jscs_path,lt.plugins.jscs.config_path,lt.objs.editor.__GT_val.call(null,ed));
} else
{return null;
}
})], null));
}

//# sourceMappingURL=jscs_compiled.js.map