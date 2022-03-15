/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.max = capacity;
    this.capacity = 0;
    this.list = new doubleNodeList;
    this.cache = {}
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!(key in this.cache)){
        return -1
    }
    this.updateRecent(this.cache[key])
    return this.cache[key].value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(key in this.cache){
        this.cache[key].value = value
    }else{
        if(this.capacity === this.max){
            delete this.cache[this.list.tail.key]
            this.list.removeTail();    
        }else{
            this.capacity++;
        }
        this.cache[key] = new doubleNode(key,value)
        this.list.setHead(this.cache[key])
    }
    this.updateRecent(this.cache[key])
};

LRUCache.prototype.updateRecent = function(node){
    this.list.setHead(node)
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */






var doubleNodeList = function(){
    this.head = null;
    this.tail = null;
}

doubleNodeList.prototype.setHead = function(node){
    if(this.head === node){
            return;
        }else if(this.head === null){
            this.head = node;
            this.tail = node;
        }else if(this.head === this.tail){
            this.head.prev = node
            this.head = node
            this.head.next = this.tail
        }else{
            if(this.tail === node) this.removeTail()
            node.removeBindings();
            this.head.prev = node
            node.next = this.head
            this.head = node;
        }
}
doubleNodeList.prototype.removeTail = function(){
    if(this.head === null) return;
    if(this.head === this.tail){
        this.head = null
        this.tail = null;
    }else{
        this.tail = this.tail.prev;
        this.tail.next = null;
    }
}



var doubleNode = function(key,value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
};

doubleNode.prototype.removeBindings = function(){
    if(this.next) this.next.prev = this.prev;
    if(this.prev) this.prev.next = this.next;
    this.next = null;
    this.prev = null;
}