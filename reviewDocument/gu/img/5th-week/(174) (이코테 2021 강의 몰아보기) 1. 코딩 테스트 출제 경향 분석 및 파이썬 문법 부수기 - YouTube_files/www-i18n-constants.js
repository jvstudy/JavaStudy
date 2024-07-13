(function(){'use strict';/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var e=this||self;function f(c,b){c=c.split(".");var a=e;c[0]in a||"undefined"==typeof a.execScript||a.execScript("var "+c[0]);for(var d;c.length&&(d=c.shift());)c.length||void 0===b?a[d]&&a[d]!==Object.prototype[d]?a=a[d]:a=a[d]={}:a[d]=b}
;var g={YEAR_FULL:"y",YEAR_FULL_WITH_ERA:"y G",YEAR_MONTH_ABBR:"MMM y",YEAR_MONTH_FULL:"MMMM y",YEAR_MONTH_SHORT:"MM/y",MONTH_DAY_ABBR:"MMM d",MONTH_DAY_FULL:"MMMM dd",MONTH_DAY_SHORT:"M/d",MONTH_DAY_MEDIUM:"MMMM d",MONTH_DAY_YEAR_MEDIUM:"MMM d, y",WEEKDAY_MONTH_DAY_MEDIUM:"EEE, MMM d",WEEKDAY_MONTH_DAY_YEAR_MEDIUM:"EEE, MMM d, y",DAY_ABBR:"d",MONTH_DAY_TIME_ZONE_SHORT:"MMM d, h:mm\u202fa zzzz"};
g={YEAR_FULL:"y\ub144",YEAR_FULL_WITH_ERA:"G y\ub144",YEAR_MONTH_ABBR:"y\ub144 MMM",YEAR_MONTH_FULL:"y\ub144 MMMM",YEAR_MONTH_SHORT:"y. M.",MONTH_DAY_ABBR:"MMM d\uc77c",MONTH_DAY_FULL:"MMMM dd\uc77c",MONTH_DAY_SHORT:"M. d.",MONTH_DAY_MEDIUM:"MMMM d\uc77c",MONTH_DAY_YEAR_MEDIUM:"y\ub144 MMM d\uc77c",WEEKDAY_MONTH_DAY_MEDIUM:"MMM d\uc77c (EEE)",WEEKDAY_MONTH_DAY_YEAR_MEDIUM:"y\ub144 MMM d\uc77c (EEE)",DAY_ABBR:"d\uc77c",MONTH_DAY_TIME_ZONE_SHORT:"MMM d\uc77c a h:mm zzzz"};var h={ERAS:["BC","AD"],ERANAMES:["Before Christ","Anno Domini"],NARROWMONTHS:"JFMAMJJASOND".split(""),STANDALONENARROWMONTHS:"JFMAMJJASOND".split(""),MONTHS:"January February March April May June July August September October November December".split(" "),STANDALONEMONTHS:"January February March April May June July August September October November December".split(" "),SHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONESHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
WEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),STANDALONEWEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),STANDALONESHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),NARROWWEEKDAYS:"SMTWTFS".split(""),STANDALONENARROWWEEKDAYS:"SMTWTFS".split(""),SHORTQUARTERS:["Q1","Q2","Q3","Q4"],QUARTERS:["1st quarter","2nd quarter","3rd quarter","4th quarter"],AMPMS:["AM","PM"],DATEFORMATS:["EEEE, MMMM d, y",
"MMMM d, y","MMM d, y","M/d/yy"],TIMEFORMATS:["h:mm:ss\u202fa zzzz","h:mm:ss\u202fa z","h:mm:ss\u202fa","h:mm\u202fa"],DATETIMEFORMATS:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],FIRSTDAYOFWEEK:6,WEEKENDRANGE:[5,6],FIRSTWEEKCUTOFFDAY:5};
h={ERAS:["BC","AD"],ERANAMES:["\uae30\uc6d0\uc804","\uc11c\uae30"],NARROWMONTHS:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),STANDALONENARROWMONTHS:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),MONTHS:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),STANDALONEMONTHS:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),
SHORTMONTHS:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),STANDALONESHORTMONTHS:"1\uc6d4 2\uc6d4 3\uc6d4 4\uc6d4 5\uc6d4 6\uc6d4 7\uc6d4 8\uc6d4 9\uc6d4 10\uc6d4 11\uc6d4 12\uc6d4".split(" "),WEEKDAYS:"\uc77c\uc694\uc77c \uc6d4\uc694\uc77c \ud654\uc694\uc77c \uc218\uc694\uc77c \ubaa9\uc694\uc77c \uae08\uc694\uc77c \ud1a0\uc694\uc77c".split(" "),STANDALONEWEEKDAYS:"\uc77c\uc694\uc77c \uc6d4\uc694\uc77c \ud654\uc694\uc77c \uc218\uc694\uc77c \ubaa9\uc694\uc77c \uae08\uc694\uc77c \ud1a0\uc694\uc77c".split(" "),
SHORTWEEKDAYS:"\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0".split(""),STANDALONESHORTWEEKDAYS:"\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0".split(""),NARROWWEEKDAYS:"\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0".split(""),STANDALONENARROWWEEKDAYS:"\uc77c\uc6d4\ud654\uc218\ubaa9\uae08\ud1a0".split(""),SHORTQUARTERS:["1\ubd84\uae30","2\ubd84\uae30","3\ubd84\uae30","4\ubd84\uae30"],QUARTERS:["\uc81c 1/4\ubd84\uae30","\uc81c 2/4\ubd84\uae30","\uc81c 3/4\ubd84\uae30","\uc81c 4/4\ubd84\uae30"],AMPMS:["\uc624\uc804",
"\uc624\ud6c4"],DATEFORMATS:["y\ub144 MMMM d\uc77c EEEE","y\ub144 MMMM d\uc77c","y. M. d.","yy. M. d."],TIMEFORMATS:["a h\uc2dc m\ubd84 s\ucd08 zzzz","a h\uc2dc m\ubd84 s\ucd08 z","a h:mm:ss","a h:mm"],DATETIMEFORMATS:["{1} {0}","{1} {0}","{1} {0}","{1} {0}"],FIRSTDAYOFWEEK:6,WEEKENDRANGE:[5,6],FIRSTWEEKCUTOFFDAY:5};function k(c,b){if(void 0===b){b=c+"";var a=b.indexOf(".");b=Math.min(-1===a?0:b.length-a-1,3)}a=Math.pow(10,b);b={g:b,f:(c*a|0)%a};return 1==(c|0)&&0==b.g?"one":"other"}
k=function(){return"other"};f("YT_I18N_FORMATTING_GOOG_LOCALE","ko");f("YT_I18N_FORMATTING_DATE_TIME_PATTERNS",g);f("YT_I18N_FORMATTING_DATE_TIME_SYMBOLS",h);
f("YT_I18N_FORMATTING_RELATIVE_DATE_TIME_SYMBOLS",{DAY:{LONG:{R:{"-1":"\uc5b4\uc81c","-2":"\uadf8\uc800\uaed8",0:"\uc624\ub298",1:"\ub0b4\uc77c",2:"\ubaa8\ub808"},P:"other{#\uc77c \uc804}",F:"other{#\uc77c \ud6c4}"}},HOUR:{LONG:{R:{0:"\ud604\uc7ac \uc2dc\uac04"},P:"other{#\uc2dc\uac04 \uc804}",F:"other{#\uc2dc\uac04 \ud6c4}"}},MINUTE:{LONG:{R:{0:"\ud604\uc7ac \ubd84"},P:"other{#\ubd84 \uc804}",F:"other{#\ubd84 \ud6c4}"}},MONTH:{LONG:{R:{"-1":"\uc9c0\ub09c\ub2ec",0:"\uc774\ubc88 \ub2ec",1:"\ub2e4\uc74c \ub2ec"},
P:"other{#\uac1c\uc6d4 \uc804}",F:"other{#\uac1c\uc6d4 \ud6c4}"}},QUARTER:{LONG:{R:{"-1":"\uc9c0\ub09c \ubd84\uae30",0:"\uc774\ubc88 \ubd84\uae30",1:"\ub2e4\uc74c \ubd84\uae30"},P:"other{#\ubd84\uae30 \uc804}",F:"other{#\ubd84\uae30 \ud6c4}"}},SECOND:{LONG:{R:{0:"\uc9c0\uae08"},P:"other{#\ucd08 \uc804}",F:"other{#\ucd08 \ud6c4}"}},WEEK:{LONG:{R:{"-1":"\uc9c0\ub09c\uc8fc",0:"\uc774\ubc88 \uc8fc",1:"\ub2e4\uc74c \uc8fc"},P:"other{#\uc8fc \uc804}",F:"other{#\uc8fc \ud6c4}"}},YEAR:{LONG:{R:{"-1":"\uc791\ub144",
0:"\uc62c\ud574",1:"\ub0b4\ub144"},P:"other{#\ub144 \uc804}",F:"other{#\ub144 \ud6c4}"}}});f("YT_I18N_FORMATTING_PLURAL_RULES_SELECT",k);
f("YT_I18N_FORMATTING_DURATION_TIME_SYMBOLS",{DAY:{LONG:"other{#\uc77c}",SHORT:"other{#\uc77c}",NARROW:"other{#\uc77c}"},HOUR:{LONG:"other{#\uc2dc\uac04}",SHORT:"other{#\uc2dc\uac04}",NARROW:"other{#\uc2dc\uac04}"},MINUTE:{LONG:"other{#\ubd84}",SHORT:"other{#\ubd84}",NARROW:"other{#\ubd84}"},MONTH:{LONG:"other{#\uac1c\uc6d4}",SHORT:"other{#\uac1c\uc6d4}",NARROW:"other{#\uac1c\uc6d4}"},SECOND:{LONG:"other{#\ucd08}",SHORT:"other{#\ucd08}",NARROW:"other{#\ucd08}"},WEEK:{LONG:"other{#\uc8fc}",SHORT:"other{#\uc8fc}",
NARROW:"other{#\uc8fc}"},YEAR:{LONG:"other{#\ub144}",SHORT:"other{#\ub144}",NARROW:"other{#\ub144}"}});}).call(this);
