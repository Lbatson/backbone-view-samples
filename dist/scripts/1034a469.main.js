window.App={Models:{},Collections:{},Controllers:{},Views:{},Routers:{},init:function(){"use strict";console.log("Hello from Backbone!")}},$(function(){"use strict";App.init()}),this.App=this.App||{},this.App.Templates=this.App.Templates||{},this.App.Templates.ButtonRow=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+='<button class="btn '+i((f=b&&b.model,f=null==f||f===!1?f:f.description,typeof f===h?f.apply(b):f))+'">'+i((f=b&&b.model,f=null==f||f===!1?f:f.title,typeof f===h?f.apply(b):f))+"</button><br><br>\n"}),this.App.Templates.List=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i="function",j=this.escapeExpression;return h+='<h3 class="list-title">',(g=c.headerTitle)?f=g.call(b,{hash:{},data:e}):(g=b&&b.headerTitle,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'</h3>\n<div class="list-body"></div>\n<div class="list-footer">\n    <h6>This is the footer</h6>\n</div>'}),this.App.Templates.ListRow=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+="<div>"+i((f=b&&b.model,f=null==f||f===!1?f:f.title,typeof f===h?f.apply(b):f))+"</div>\n<div>"+i((f=b&&b.model,f=null==f||f===!1?f:f.description,typeof f===h?f.apply(b):f))+"</div>"}),this.App.Templates.ListRowEvents=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+="<div>"+i((f=b&&b.model,f=null==f||f===!1?f:f.title,typeof f===h?f.apply(b):f))+"</div>\n<div>"+i((f=b&&b.model,f=null==f||f===!1?f:f.description,typeof f===h?f.apply(b):f))+'</div>\n<button class="btn">Event</button>'}),this.App.Templates.Modal=Handlebars.template(function(a,b,c,d,e){function f(){return'\n            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>\n            '}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i="",j=this,k="function",l=this.escapeExpression;return i+='<div class="modal-dialog">\n    <div class="modal-content">\n        <div class="modal-header">\n            ',g=c["if"].call(b,b&&b.closeButton,{hash:{},inverse:j.noop,fn:j.program(1,f,e),data:e}),(g||0===g)&&(i+=g),i+='\n            <h4 class="modal-title">',(h=c.title)?g=h.call(b,{hash:{},data:e}):(h=b&&b.title,g=typeof h===k?h.call(b,{hash:{},data:e}):h),i+=l(g)+'</h4>\n        </div>\n        <div class="modal-body"></div>\n        <div class="modal-footer"></div>\n    </div><!-- /.modal-content -->\n</div><!-- /.modal-dialog -->\n'}),this.App.Templates.ModalBody=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e="";return e+='\n    <h5>Model</h5>\n    <ul class="list-unstyled">\n    ',d=c.each.call(a,a&&a.model,{hash:{},inverse:p.noop,fn:p.program(2,g,b),data:b}),(d||0===d)&&(e+=d),e+="\n    </ul>\n"}function g(a,b){var c,d="";return d+="\n    <li>"+o((c=null==b||b===!1?b:b.key,typeof c===n?c.apply(a):c))+": "+o(typeof a===n?a.apply(a):a)+"</li>\n    "}function h(a,b){var d,e="";return e+="\n    ",d=c["if"].call(a,a&&a.collection,{hash:{},inverse:p.program(8,k,b),fn:p.program(5,i,b),data:b}),(d||0===d)&&(e+=d),e+="\n"}function i(a,b){var d,e="";return e+="\n        ",d=c.each.call(a,a&&a.collection,{hash:{},inverse:p.noop,fn:p.program(6,j,b),data:b}),(d||0===d)&&(e+=d),e+="\n    "}function j(a,b){var d,e,f="";return f+='\n        <div class="list-group">\n            <h5 class="list-group-item-heading">Model</h5>\n            <li>title: ',(e=c.title)?d=e.call(a,{hash:{},data:b}):(e=a&&a.title,d=typeof e===n?e.call(a,{hash:{},data:b}):e),f+=o(d)+"</li>\n            <li>description: ",(e=c.description)?d=e.call(a,{hash:{},data:b}):(e=a&&a.description,d=typeof e===n?e.call(a,{hash:{},data:b}):e),f+=o(d)+"</li>\n        </div>\n        "}function k(){return"\n    <h5>Body Content</h5>\n    "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var l,m="",n="function",o=this.escapeExpression,p=this;return l=c["if"].call(b,b&&b.model,{hash:{},inverse:p.program(4,h,e),fn:p.program(1,f,e),data:e}),(l||0===l)&&(m+=l),m+="\n"}),this.App.Templates.ModalBodySelect=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return f+='\n    <label class="radio">\n        <input type="radio" name="testRadio" value="',(e=c.id)?d=e.call(a,{hash:{},data:b}):(e=a&&a.id,d=typeof e===i?e.call(a,{hash:{},data:b}):e),f+=j(d)+'">',(e=c.title)?d=e.call(a,{hash:{},data:b}):(e=a&&a.title,d=typeof e===i?e.call(a,{hash:{},data:b}):e),f+=j(d)+"\n    </label>\n    "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h="",i="function",j=this.escapeExpression,k=this;return h+='<form class="js-test-form">\n    ',g=c.each.call(b,b&&b.collection,{hash:{},inverse:k.noop,fn:k.program(1,f,e),data:e}),(g||0===g)&&(h+=g),h+="\n</form>\n"}),this.App.Templates.ModalFooter=Handlebars.template(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<button type="button" class="btn btn-default js-close-btn">Close</button>\n<button type="button" class="btn btn-primary js-save-btn">Save changes</button>'}),this.App.Templates.Tab=Handlebars.template(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<h3>Tab View</h3>\n<ul class="nav nav-tabs">\n    <li class="active"><a href="#modal">Modal</a></li>\n    <li><a href="#list">List</a></li>\n</ul>\n<div class="tab-content">\n    <div class="tab-pane active"></div>\n</div>'}),this.App.Templates.TabList=Handlebars.template(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<div class ="row">\n    <div class="span12">\n        <div class="list-body"></div>\n    </div>\n</div>\n<div class="row">\n    <div class="span12">\n        <div class="listDisplay"></div>\n    </div>\n</div>\n'}),App.Models=App.Models||{},App.Collections=App.Collections||{},function(){"use strict";App.Models.TestModel=Backbone.Model.extend({defaults:{title:"Test Model",description:"This is a test model"}}),App.Collections.TestCollection=Backbone.Collection.extend({model:App.Models.TestModel})}(),App.Views=App.Views||{},function(){"use strict";App.Views.Base=Backbone.View.extend({initialize:function(a){this.options=_.defaults(a||{},this.options),this.el=this.options.el||this.el,this._container=new Backbone.ChildViewContainer,this.init()},render:function(){return this.$el.html(this.template(this.options)),this},remove:function(){return this.removeSubviews(),this.destroy(),this.$el.remove(),this.stopListening(),this},init:function(){},destroy:function(){},addSubview:function(a){this._container.add(a)},removeSubview:function(a,b){a||(a=this._container.findByModel(b)),this._container.remove(a),a.remove()},removeSubviews:function(){return this._container.each(function(a){this.removeSubview(a)},this),this}})}(),App.Views.List=App.Views.List||{},function(){"use strict";App.Views.List.Base=App.Views.Base.extend({el:".listDisplay",headerTitle:"List View",template:App.Templates.List,init:function(){this.rowView=this.options.rowView||App.Views.Row.Base,this.collection&&(this.listenTo(this.collection,"add",this.addRow),this.listenTo(this.collection,"remove",this.removeRow))},render:function(){return this.$el.html(this.template({headerTitle:this.headerTitle})),this.collection.each(function(a){this.addRow(a)},this),this},addRow:function(a){var b=new this.rowView({model:a});return this.addSubview(b),this.$(".list-body").append(b.render().el),this},removeRow:function(a){return this.removeSubview(null,a),this}})}(),App.Views.Modal=App.Views.Modal||{},function(){"use strict";App.Views.Modal.Base=App.Views.Base.extend({className:"modal fade",template:App.Templates.Modal,closeButton:!1,title:"Header",body:App.Templates.ModalBody,footer:App.Templates.ModalFooter,events:{"click .js-close-btn":"hide","click .js-save-btn":"save"},init:function(){this.$el.on("hidden.bs.modal",this.destroy.bind(this)),this.model&&this.listenTo(this.model,"change",this.render),this.collection&&this.listenTo(this.collection,"change",this.render),this.render()},destroy:function(){this.$el.off("hidden.bs.modal")},render:function(){return this.renderContainer().renderBody().renderFooter(),this},renderContainer:function(){return this.$el.html(this.template({closeButton:this.closeButton,title:this.title})),this},renderBody:function(){return this.$(".modal-body").html(this.body({model:this.model?this.model.toJSON():null,collection:this.collection?this.collection.toJSON():null})),this},renderFooter:function(){return this.$(".modal-footer").html(this.footer),this},show:function(){this.$el.modal("show")},hide:function(){this.$el.modal("hide")},save:function(){console.log("save",this.model||this.collection),this.hide()}})}(),App.Views.Row=App.Views.Row||{},function(){"use strict";App.Views.Row.Base=App.Views.Base.extend({className:"list-row",template:App.Templates.ListRow,render:function(){return this.$el.html(this.template({model:this.model?this.model.toJSON():null})),this}})}(),App.Views.Tab=App.Views.Tab||{},function(){"use strict";App.Views.Tab.Base=App.Views.Base.extend({el:".view-container",template:App.Templates.Tab,show:function(a){this.removeSubviews().render().tab(a)},tab:function(a){this.$('a[href="#'+a+'"]').tab("show");var b=this.$(".tab-content .tab-pane.active");switch(a){case"modal":App.Controllers.ModalTab(b,this);break;case"list":App.Controllers.ListTab(b,this)}return this}})}(),App.Controllers=App.Controllers||{},function(){"use strict";App.Controllers.ListTab=function(a,b){var c=App.Views.Row.Base.extend({template:App.Templates.ButtonRow}),d=new App.Collections.TestCollection([new App.Models.TestModel({title:"List View",description:"js-base-list"}),new App.Models.TestModel({title:"List View Events",description:"js-event-list"})]),e=App.Views.List.Base.extend({el:a,template:App.Templates.TabList,events:{"click .js-base-list":"baseList","click .js-event-list":"eventList"},baseList:function(){var a=new App.Views.List.Base({collection:this.createTestCollection()});a.render()},eventList:function(){var a=App.Views.Row.Base.extend({template:App.Templates.ListRowEvents,events:{"click .btn":"alertMsg"},alertMsg:function(){window.alert("Model cid: "+this.model.cid)}}),b=new App.Views.List.Base({collection:this.createTestCollection(),rowView:a});b.render()},createTestCollection:function(){return new App.Collections.TestCollection([new App.Models.TestModel({}),new App.Models.TestModel({title:"Second model"}),new App.Models.TestModel({title:"Third model",description:"Different description"})])}}),f=new e({collection:d,rowView:c});b.addSubview(f),f.render()}}(),App.Controllers=App.Controllers||{},function(){"use strict";App.Controllers.ModalTab=function(a,b){var c=App.Views.Row.Base.extend({template:App.Templates.ButtonRow}),d=new App.Collections.TestCollection([new App.Models.TestModel({title:"Base Modal",description:"js-base-modal"}),new App.Models.TestModel({title:"Model Modal",description:"js-model-modal"}),new App.Models.TestModel({title:"Collection Modal",description:"js-collection-modal"}),new App.Models.TestModel({title:"Custom Modal",description:"js-custom-modal"}),new App.Models.TestModel({title:"Event Modal",description:"js-event-modal"}),new App.Models.TestModel({title:"Callback Modal",description:"js-callback-modal"}),new App.Models.TestModel({title:"Selection Modal",description:"js-selection-modal"})]),e=App.Views.List.Base.extend({el:a,template:Handlebars.compile('<div class="list-body"></div>'),events:{"click .js-base-modal":"baseModal","click .js-model-modal":"modelModal","click .js-collection-modal":"collectionModal","click .js-custom-modal":"customModal","click .js-event-modal":"eventModal","click .js-callback-modal":"callbackModal","click .js-selection-modal":"selectionModal"},baseModal:function(){var a=new App.Views.Modal.Base;a.show()},modelModal:function(){console.log("base modal");var a=new App.Models.TestModel,b=new App.Views.Modal.Base({model:a});b.show()},collectionModal:function(){console.log("collection modal");var a=new App.Collections.TestCollection([new App.Models.TestModel,new App.Models.TestModel({title:"Second model"}),new App.Models.TestModel({title:"Third model",description:"Different description"})]),b=new App.Views.Modal.Base({collection:a});b.show()},customModal:function(){console.log("custom modal");var a=App.Views.Modal.Base.extend({closeButton:!0,title:"Custom Header Title",body:Handlebars.compile("<h5>Custom Body Content</h5>"),renderFooter:function(){return this.$(".modal-footer").html("override renderFooter"),this}}),b=new a;b.show()},eventModal:function(){console.log("event modal");var a=App.Views.Modal.Base.extend({events:{"click .js-close-btn":"hide","click .js-save-btn":"alertMsg"},alertMsg:function(){window.alert("event modal")}}),b=new a;b.show()},callbackModal:function(){console.log("callback modal");var a=this,b=App.Views.Modal.Base.extend({save:function(){this.hide(),this.$el.on("hidden.bs.modal",function(){a.test(this.$el),this.remove()}.bind(this))}}),c=new b;c.show()},selectionModal:function(){console.log("selection modal");var a,b=this,c=new App.Collections.TestCollection([new App.Models.TestModel({id:1}),new App.Models.TestModel({id:2,title:"Second model"}),new App.Models.TestModel({id:3,title:"Third model",description:"Different description"})]),d=App.Views.Modal.Base.extend({body:App.Templates.ModalBodySelect,save:function(){this.hide(),this.$el.on("hidden.bs.modal",function(){a=parseInt(this.$(".js-test-form input[name=testRadio]:checked").val(),10),b.test(c.get(a)),this.remove()}.bind(this))}}),e=new d({collection:c});e.show()},test:function(a){console.log("testing callback",a)}}),f=new e({collection:d,rowView:c});b.addSubview(f),f.render()}}(),App.Routers=App.Routers||{},function(){"use strict";var a=($(".view-container"),function(){return new App.Views.Tab.Base}()),b=Backbone.Router.extend({routes:{"":"index",list:"list",modal:"modal"},initialize:function(){Backbone.history.start()},index:function(){this.modal()},list:function(){a.show("list")},modal:function(){a.show("modal")}});App.Routers.MainRouter=new b}();