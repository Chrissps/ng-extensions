export class NgListElement {

  private _id: number;
  private _title: string;
  private _content: string;
  private _textColorTitle: string;
  private _textColorContent: string;
  private _show: boolean;
  private _actionItems: Array<NgListElementAction>;
  private _data: any;

  constructor(id: number = 0, title: string = '', content: string = '', textColorTitle = '#212121', textColorContent = '#212121', show: boolean = true, actionItems: Array<NgListElementAction> = new Array<NgListElementAction>(), data: any = null) {
    this._id = id;
    this._title = title;
    this._content = content;
    this._textColorTitle = textColorTitle;
    this._textColorContent = textColorContent;
    this._show = show;
    this._actionItems = actionItems;
    this._data = data;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get show(): boolean {
    return this._show;
  }

  set show(value: boolean) {
    this._show = value;
  }

  get actionItems(): Array<NgListElementAction> {
    return this._actionItems;
  }

  set actionItems(value: Array<NgListElementAction>) {
    this._actionItems = value;
  }

  public addActionItem(action: NgListElementAction): void {
    action.parent = this;
    this.actionItems.push(action);
  }

  get data(): any {
    return this._data;
  }

  set data(value: any) {
    this._data = value;
  }
  get textColorTitle(): string {
    return this._textColorTitle;
  }

  set textColorTitle(value: string) {
    this._textColorTitle = value;
  }

  get textColorContent(): string {
    return this._textColorContent;
  }

  set textColorContent(value: string) {
    this._textColorContent = value;
  }
}

export class NgListElementAction {

  private _isIcon: boolean;
  private _content: string;
  private _color: string;
  private _show: boolean;
  private _callback: { (elementAction: NgListElementAction): void; };
  private _parent: NgListElement;

  constructor(isIcon: boolean = true, content: string = 'edit', color: string = '#000000', show: boolean = true, callback: { (elementAction: NgListElementAction): void } = null, parent: NgListElement = null) {
    this._isIcon = isIcon;
    this._content = content;
    this._color = color;
    this._show = show;
    this._callback = callback;
    this._parent = parent;
  }

  get isIcon(): boolean {
    return this._isIcon;
  }

  set isIcon(value: boolean) {
    this._isIcon = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  get show(): boolean {
    return this._show;
  }

  set show(value: boolean) {
    this._show = value;
  }

  get callback(): { (elementAction: NgListElementAction): void } {
    return this._callback;
  }

  set callback(value: { (elementAction: NgListElementAction): void }) {
    this._callback = value;
  }

  get parent(): NgListElement {
    return this._parent;
  }

  set parent(value: NgListElement) {
    this._parent = value;
  }

  public execute() {
    this.callback(this);
  }
}

export class NgListCollection {

  private _id: number;
  private _title: string;
  private _expand: boolean;
  private _show: boolean;
  private _backgroundColor: string;
  private _backgroundColorTitle: string;
  private _colorTitle: string;
  private _listElements: Array<NgListElement>;

  constructor(id: number = 0, title: string = '', expand: boolean = true, show: boolean = true, backgroundColor: string = '#ffffff', backgroundColorTitle: string = '#00E676', colorTitle: string = '#212121', listElements: Array<NgListElement> = new Array<NgListElement>()) {
    this._id = id;
    this._title = title;
    this._expand = expand;
    this._show = show;
    this._backgroundColor = backgroundColor;
    this._backgroundColorTitle = backgroundColorTitle;
    this._colorTitle = colorTitle;
    this._listElements = listElements;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get expand(): boolean {
    return this._expand;
  }

  set expand(value: boolean) {
    this._expand = value;
    this._listElements.forEach(element => element.show = this._expand);
  }

  get show(): boolean {
    return this._show;
  }

  set show(value: boolean) {
    this._show = value;
  }

  get backgroundColor(): string {
    return this._backgroundColor;
  }

  set backgroundColor(value: string) {
    this._backgroundColor = value;
  }

  get backgroundColorTitle(): string {
    return this._backgroundColorTitle;
  }

  set backgroundColorTitle(value: string) {
    this._backgroundColorTitle = value;
  }

  get colorTitle(): string {
    return this._colorTitle;
  }

  set colorTitle(value: string) {
    this._colorTitle = value;
  }

  get listElements(): Array<NgListElement> {
    return this._listElements;
  }

  set listElements(value: Array<NgListElement>) {
    this._listElements = value;
  }

  public addListElement(listElement: NgListElement): void {
    listElement.id = this._listElements.length == 0 ? 0 : this._listElements[this._listElements.length - 1].id + 1;
    this._listElements.push(listElement);
  }

  public removeListElement(listCollection: NgListElement): void {
    this.listElements = this.listElements.filter(o => o.id != listCollection.id);
  }

  public cleanElements(): void {
    this.listElements = new Array<NgListElement>();
  }
}
