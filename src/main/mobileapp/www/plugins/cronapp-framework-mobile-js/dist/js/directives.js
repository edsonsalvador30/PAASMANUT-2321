function maskDirectiveAsDate(e,t){return maskDirective(e,t,"as-date")}function maskDirectiveMask(e,t){return maskDirective(e,t,"mask")}function maskDirective(e,t,a){return{restrict:"A",require:"?ngModel",link:function(e,r,i,n){if("as-date"!=a||void 0===i.mask){var l=$(r),o=l.attr("type");if("checkbox"!=o&&"password"!=o){l.data("type",o),"datetime"==o?l.attr("type","datetime-local"):"time-local"==o?l.attr("type","time"):"integer"!=o&&"number"!=o&&"money"!=o||l.attr("type","tel"),n&&(n.$formatters=[],n.$parsers=[]),void 0!==i.asDate&&"text"==o&&(o="date");var s=!1,d=i.mask||i.format;d=d?parseMaskType(d,t):parseMaskType(o,t),d.endsWith(";0")&&(s=!0);var u=d.replace(";1","").replace(";0","").trim();if(void 0!=u&&0!=u.length)if(i.mask||"number"!=o&&"money"!=o&&"integer"!=o){if("text"==o||"tel"==o||i.mask){var c={};i.maskPlaceholder&&(c.placeholder=i.maskPlaceholder),l.mask(u,c),s&&n&&(n.$formatters.push(function(e){return e?l.masked(e):null}),n.$parsers.push(function(e){return e?l.cleanVal():null}))}}else{s=!0,!1;var p=u.trim().replace(/\./g,"").replace(/\,/g,"").replace(/#/g,"").replace(/0/g,"").replace(/9/g,""),m="",v="",f="",g=",",h=0;u.startsWith(p)?m=p:u.endsWith(p)&&(v=p);var M=u.trim().replace(m,"").replace(v,"").trim();M.startsWith("#.")?f=".":M.startsWith("#,")&&(f=",");var y=null;if(-1!=M.indexOf(",0")?(g=",",y=",0"):-1!=M.indexOf(".0")&&(g=".",y=".0"),null!=y){var b=M.substring(M.indexOf(y)+1);h=b.length}var k="numeric";0==h&&(k="integer");var F={rightAlign:"money"==o,unmaskAsNumber:!0,allowMinus:!0,prefix:m,suffix:v,radixPoint:g,digits:h};f&&(F.autoGroup=!0,F.groupSeparator=f),$(r).inputmask(k,F),n&&(n.$formatters.push(function(e){return void 0!=e&&null!=e&&""!=e?format(u,e):null}),n.$parsers.push(function(e){if(void 0!=e&&null!=e&&""!=e){var t=l.inputmask("unmaskedvalue");if(""!=t)return t}return null}))}}}}}}function parseMaskType(e,t){return"datetime"==e||"datetime-local"==e?"Format.DateTime"==(e=t.instant("Format.DateTime"))&&(e="DD/MM/YYYY HH:mm:ss"):"date"==e?"Format.Date"==(e=t.instant("Format.Date"))&&(e="DD/MM/YYYY"):"time"==e||"time-local"==e?"Format.Hour"==(e=t.instant("Format.Hour"))&&(e="HH:mm:ss"):"month"==e?e="MMMM":"number"==e?"Format.Decimal"==(e=t.instant("Format.Decimal"))&&(e="0,00"):"money"==e?"Format.Money"==(e=t.instant("Format.Money"))&&(e="#.#00,00"):"integer"==e?e="0":"week"==e?e="dddd":"tel"==e?e="(00) 00000-0000;0":"text"==e&&(e=""),e}maskDirectiveAsDate.$inject=["$compile","$translate"],maskDirectiveMask.$inject=["$compile","$translate"],function($app){var patternFormat=function(e){return e?$(e).attr("format")||"DD/MM/YYYY":"DD/MM/YYYY"},parsePermission=function(e){var t={visible:{public:!0},enabled:{public:!0}};if(e)for(var a=e.toLowerCase().trim().split(","),r=0;r<a.length;r++){var i=a[r].trim();if(i){var n=i.split(":");if(2==n.length){var l=n[0].trim(),o=n[1].trim();if(o){for(var s=o.split(";"),d={},u=0;u<s.length;u++){var c=s[u].trim();c&&(d[c]=!0)}t[l]=d}}}}return t};app.directive("asDate",maskDirectiveAsDate).directive("ngDestroy",function(){return{restrict:"A",link:function(scope,element,attrs,ctrl){element.on("$destroy",function(){attrs.ngDestroy&&attrs.ngDestroy.length>0&&(attrs.ngDestroy.indexOf("app.")>-1||attrs.ngDestroy.indexOf("blockly.")>-1?scope.$eval(attrs.ngDestroy):eval(attrs.ngDestroy))})}}}).filter("mask",["$translate",function(e){return function(t,a){if(!(a=parseMaskType(a,e)))return t;if(a=a.replace(";1","").replace(";0","").trim(),"string"==typeof t&&t.match(isoDate))return moment.utc(t).format(a);if(t instanceof Date)return moment.utc(t).format(a);if("number"==typeof t)return format(a,t);if(void 0!=t&&null!=t&&""!=t){var r=$('<input type="text">');return r.mask(a),r.masked(t)}return t}}]).directive("mask",maskDirectiveMask).directive("dynamicImage",["$compile",function(e){return{restrict:"A",scope:!0,require:"ngModel",link:function(t,a,r){var i=r.ngRequired&&"true"==r.ngRequired?"required":"",n=a.html(),l='<div ngf-drop="" ngf-drag-over-class="dragover">                   <img style="width: 100%;" ng-if="$ngModel$" data-ng-src="{{$ngModel$.startsWith(\'http\') || ($ngModel$.startsWith(\'/\') && $ngModel$.length < 1000)? $ngModel$ : \'data:image/png;base64,\' + $ngModel$}}">                   <div class="btn" ng-if="!$ngModel$" ngf-drop="" ngf-select="" ngf-change="cronapi.internal.setFile(\'$ngModel$\', $file)" ngf-pattern="\'image/*\'" ngf-max-size="$maxFileSize$">                     $userHtml$                   </div>                   <div class="remove-image-button button button-assertive" ng-if="$ngModel$" ng-click="$ngModel$=null">                     <span class="icon ion-android-close"></span>                   </div>                   <div class="button button-positive" ng-if="!$ngModel$" ng-click="cronapi.internal.startCamera(\'$ngModel$\')">                     <span class="icon ion-ios-videocam"></span>                   </div>                 </div>',o="";r.maxFileSize&&(o=r.maxFileSize),l=$(l.split("$ngModel$").join(r.ngModel).split("$required$").join(i).split("$userHtml$").join(n).split("$maxFileSize$").join(o)),$(a).html(l),e(l)(a.scope())}}}]).directive("dynamicFile",["$compile",function(e){return{restrict:"A",scope:!0,require:"ngModel",link:function(t,a,r){var i=r.ngRequired&&"true"==r.ngRequired?"required":"",n=r.ngModel.split("."),l=n[0],o=n[n.length-1],s=Math.floor(1e3*Math.random()+20),d=a.html(),u="";r.maxFileSize&&(u=r.maxFileSize);var c='                                <div ng-show="!$ngModel$" ngf-drop="" ngf-drag-over-class="dragover">                                  <div class="btn" ngf-drop="" ngf-select="" ngf-change="cronapi.internal.uploadFile(\'$ngModel$\', $file, \'uploadprogress$number$\')" ngf-max-size="$maxFileSize$">                                    $userHtml$                                  </div>                                  <div class="progress" data-type="bootstrapProgress" id="uploadprogress$number$" style="display:none">                                    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:0%">                                      <span class="sr-only"></span>                                    </div>                                  </div>                                </div>                                 <div ng-show="$ngModel$" class="upload-image-component-attribute">                                   <div class="button button-assertive" style="float:right;" ng-if="$ngModel$" ng-click="$ngModel$=null">                                     <span class="icon ion-android-close"></span>                                   </div>                                   <div>                                     <div ng-bind-html="cronapi.internal.generatePreviewDescriptionByte($ngModel$)"></div>                                     <a href="javascript:void(0)" ng-click="cronapi.internal.downloadFileEntityMobile($datasource$,\'$field$\')">download</a>                                   </div>                                 </div>                                 ';c=$(c.split("$ngModel$").join(r.ngModel).split("$datasource$").join(l).split("$field$").join(o).split("$number$").join(s).split("$required$").join(i).split("$userHtml$").join(d).split("$maxFileSize$").join(u)),$(a).html(c),e(c)(a.scope())}}}]).directive("pwCheck",[function(){"use strict";return{require:"ngModel",link:function(e,t,a,r){var i="#"+a.pwCheck;t.add(i).on("keyup",function(){e.$apply(function(){var e=t.val()===$(i).val();r.$setValidity("pwmatch",e)})})}}}]).directive("valid",function(){return{require:"^ngModel",restrict:"A",link:function(e,t,a,r){var i={cpf:CPF,cnpj:CNPJ};r.$validators[a.valid]=function(e,r){var n=e||r,l=i[a.valid].isValid(n);return l?t[0].setCustomValidity(""):t[0].setCustomValidity(t[0].dataset.errorMessage),l||!n}}}}).directive("cronappSecurity",function(){return{restrict:"A",link:function(e,t,a){var r=[];e.session&&e.session.roles&&(r=e.session.roles.toLowerCase().split(","));for(var i=parsePermission(a.cronappSecurity),n=!1,l=!1,o=0;o<r.length;o++){var s=r[o].trim();s&&(i.visible[s]&&(n=!0),i.enabled[s]&&(l=!0))}n||$(t).hide(),l||$(t).find("*").addBack().attr("disabled",!0)}}}).directive("cronappStars",[function(){"use strict";return{restrict:"A",require:"ngModel",link:function(e,t,a,r){function i(e){for(var t=1;t<=5;t++)o[t-1].removeClass("ion-android-star-outline"),o[t-1].removeClass("ion-android-star"),t<=e?o[t-1].addClass("ion-android-star"):o[t-1].addClass("ion-android-star-outline");return e}var n=$(t),l=$(n.children().get(0));n.html("");for(var o=[],s=1;s<=5;s++){var d=l.clone();n.append(d),d.attr("idx",s),d.click(function(){e.$apply(function(){r.$viewValue=parseInt($(this).attr("idx")),r.$commitViewValue()}.bind(this))}),o.push(d)}r.$parsers.push(i),r.$formatters.push(i)}}}]).directive("cronappFilter",function(){var setFilterInButton=function(e,t,a){var r=e.closest("fieldset");if(r){var i=r.find("button[cronapp-filter]");if(i){var n=i.data("filters");n||(n=[]);var l=-1,o=e.attr("ng-model");if($(n).each(function(e){this.ngModel==o&&(l=e)}),l>-1&&n.splice(l,1),t.length>0){var s={ngModel:o,bindedFilter:t};n.push(s)}i.data("filters",n)}}},makeAutoPostSearch=function(e,t,a){var r=e.closest("fieldset");if(r&&r.length>0){var i=r.find("button[cronapp-filter]");if(i&&i.length>0){var n=i.data("filters");n&&n.length>0&&(t="",$(n).each(function(){t+=this.bindedFilter+";"}))}}a.search(t)},inputBehavior=function(scope,element,attrs,ngModelCtrl,$element,typeElement,operator,autopost){var filterTemplate="",filtersSplited=attrs.cronappFilter.split(";");$(filtersSplited).each(function(){this.length>0&&(filterTemplate+="text"==typeElement?this+"@"+operator+"%{value}%;":this+operator+"{value};")}),filterTemplate=filterTemplate.length>0?filterTemplate.substr(0,filterTemplate.length-1):"%{value}%",ngModelCtrl?scope.$watch(attrs.ngModel,function(newVal,oldVal){if(!angular.equals(newVal,oldVal)){var eType=$element.data("type")||$element.attr("type"),value=ngModelCtrl.$modelValue,datasource=eval(attrs.crnDatasource);value instanceof Date?(value=value.toISOString(),value+="date"==eType?"@@date":"time"==eType||"time-local"==eType?"@@time":"@@datetime"):"number"==typeof value?value+="@@number":"boolean"==typeof value&&(value+="@@boolean");var bindedFilter=filterTemplate.split("{value}").join(value);0==ngModelCtrl.$viewValue.length&&(bindedFilter=""),setFilterInButton($element,bindedFilter,operator),autopost&&makeAutoPostSearch($element,bindedFilter,datasource)}}):"text"==typeElement?$element.on("keyup",function(){var datasource=eval(attrs.crnDatasource),value=void 0;value=ngModelCtrl&&void 0!=ngModelCtrl?ngModelCtrl.$viewValue:this.value;var bindedFilter=filterTemplate.split("{value}").join(value);0==this.value.length&&(bindedFilter=""),setFilterInButton($element,bindedFilter,operator),autopost&&makeAutoPostSearch($element,bindedFilter,datasource)}):$element.on("change",function(){var datasource=eval(attrs.crnDatasource),value=void 0,typeElement=$(this).attr("type");if(void 0!=attrs.asDate&&(typeElement="date"),ngModelCtrl&&void 0!=ngModelCtrl)value=ngModelCtrl.$viewValue;else if("checkbox"==typeElement)value=$(this).is(":checked");else if("date"==typeElement){if(value=this.value,this.value.length>0){var momentDate=moment(this.value,patternFormat(this));value=momentDate.toDate().toISOString()}}else value=this.value;var bindedFilter=filterTemplate.split("{value}").join(value);0==value.toString().length&&(bindedFilter=""),setFilterInButton($element,bindedFilter,operator),autopost&&makeAutoPostSearch($element,bindedFilter,datasource)})},buttonBehavior=function(scope,element,attrs,ngModelCtrl,$element,typeElement,operator,autopost){$element.on("click",function(){var $this=$(this),datasourceName="";datasourceName=attrs.crnDatasource?attrs.crnDatasource:$element.parent().attr("crn-datasource");var filters=$this.data("filters");if(datasourceName&&datasourceName.length>0&&filters){var bindedFilter="";$(filters).each(function(){bindedFilter+=this.bindedFilter+";"});var datasourceToFilter=eval(datasourceName);datasourceToFilter.search(bindedFilter)}})};return{restrict:"A",require:"?ngModel",link:function(e,t,a,r){var i=$(t),n=i.data("type")||i.attr("type");void 0!=a.asDate&&(n="date");var l="=";a.cronappFilterOperator&&a.cronappFilterOperator.length>0&&(l=a.cronappFilterOperator);var o=!0;a.cronappFilterAutopost&&"false"==a.cronappFilterAutopost&&(o=!1),"INPUT"==i[0].tagName?inputBehavior(e,t,a,r,i,n,l,o):buttonBehavior(e,t,a,r,i,n,l,o)}}})}(app);