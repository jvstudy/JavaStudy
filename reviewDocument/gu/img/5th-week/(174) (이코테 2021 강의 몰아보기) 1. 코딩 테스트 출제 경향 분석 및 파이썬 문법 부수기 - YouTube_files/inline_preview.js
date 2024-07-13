(function(g){var window=this;'use strict';var Utb=function(a){g.V.call(this,{I:"div",S:"ytp-inline-preview-ui"});this.C=!1;this.player=a;this.T(a,"onStateChange",this.f3);this.T(a,"videodatachange",this.g3);this.T(a,"onInlinePreviewModeChange",this.B8);this.B=new g.Ru(this.d3,null,this);g.N(this,this.B)},H6=function(a){g.PV.call(this,a);
this.j=new Utb(this.player);g.N(this,this.j);this.j.hide();g.iU(this.player,this.j.element,4);a.isInline()&&(this.load(),a=a.getRootNode(),g.bv(a,["ytp-inline-preview-mode","ytp-no-contextmenu"]))};
g.x(Utb,g.V);g.k=Utb.prototype;
g.k.show=function(){g.Su(this.B);if(!this.C){this.tooltip=new g.aY(this.player,this);g.N(this,this.tooltip);g.iU(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.le=new g.tW(this.player);g.N(this,this.le);this.j=new g.V({I:"div",Ma:["ytp-inline-preview-scrim"]});g.N(this,this.j);this.j.Ka(this.element);this.T(this.j.element,"click",this.e3);this.D=new g.UX(this.player,this,300);g.N(this,this.D);this.D.Ka(this.j.element);this.controls=new g.V({I:"div",S:"ytp-inline-preview-controls"});g.N(this,
this.controls);this.controls.Ka(this.element);var a=new g.lX(this.player,this,!1);g.N(this,a);a.Ka(this.controls.element);a=new g.SX(this.player,this);g.N(this,a);a.Ka(this.controls.element);this.progressBar=new g.sX(this.player,this);g.N(this,this.progressBar);g.iU(this.player,this.progressBar.element,4);this.T(this.player,"appresize",this.Xb);this.T(this.player,"fullscreentoggled",this.Xb);this.Xb();this.C=!0}0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.progressBar.show();
this.player.qb("onInlinePreviewUiReady")};
g.k.hide=function(){this.B.stop();g.V.prototype.hide.call(this);this.player.isInline()||this.C&&this.progressBar.hide()};
g.k.xa=function(){g.V.prototype.xa.call(this)};
g.k.e3=function(a){a.target===this.j.element&&this.player.qb("onExpandInlinePreview",a)};
g.k.B8=function(){g.lv(this.player.getRootNode(),"ytp-inline-preview-mode",this.player.isInline())};
g.k.fg=function(){this.progressBar.Tc();this.D.Tc()};
g.k.d3=function(){this.fg();g.Su(this.B)};
g.k.Xb=function(){g.p1a(this.progressBar,0,this.player.rb().getPlayerSize().width,!1);g.tX(this.progressBar)};
g.k.f3=function(a){this.player.isInline()&&(0===a?this.hide():this.show())};
g.k.g3=function(a,b){if(this.player.isInline()){g.lv(this.player.getRootNode(),"ytp-show-inline-preview-audio-controls",b.yC);var c,d,e;a=!(null==(e=null==(c=b.getPlayerResponse())?void 0:null==(d=c.playerConfig)?void 0:d.inlinePlaybackConfig)||!e.showScrubbingControls);g.lv(this.player.getRootNode(),"ytp-hide-inline-preview-progress-bar",!a)}};
g.k.Re=function(){return this.tooltip};
g.k.Wt=function(a,b,c,d,e){var f=d=0,h=0,l=g.zs(a);if(b){c=g.$u(b,"ytp-mute-button");var m=g.$u(b,"ytp-subtitles-button"),n=g.xs(b,this.element);b=g.zs(b);d=n.y+40;if(m||c)h=n.x-l.width+b.width}else h=c-l.width/2,f=35;b=this.player.rb().getPlayerSize().width;h=g.He(h,0,b-l.width);d?(a.style.top=d+(e||0)+"px",a.style.bottom=""):(a.style.top="",a.style.bottom=f+"px");a.style.left=h+"px"};g.x(H6,g.PV);H6.prototype.Bl=function(){return!1};
H6.prototype.load=function(){this.player.hideControls();this.j.show()};
H6.prototype.unload=function(){this.player.showControls();this.j.hide()};g.OV("inline_preview",H6);})(_yt_player);
