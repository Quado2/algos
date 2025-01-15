import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;
import java.util.Queue;

class TrieNode {
  Map<Character, TrieNode> children;
  boolean isEndOfWord;

  public TrieNode () {
      this.children = new HashMap<>();
      this.isEndOfWord = false;
  }
}

class Dictionary {
  TrieNode root;
  public Dictionary() {
      this.root = new TrieNode();
  }
  
  public void addWord(String word) {
      TrieNode node = root;
      for(char c: word.toCharArray()) {
          node.children.putIfAbsent(c, new TrieNode());
          node = node.children.get(c);
      }
      node.isEndOfWord = true;
  }

  public Queue<TrieNode> initializeQueue(TrieNode node, Queue<TrieNode> q, char c) {
      if(c == '.'){
          for(Character chr: node.children.keySet()){
              if(chr != null) q.add(node.children.get(chr));
          }
      } else {
          TrieNode n = node.children.get(c);
          if(n != null)  q.add(n);
      }

      return q;
  }
  
  public boolean search(String word) {
      TrieNode node = root;
      Queue<TrieNode> q = new LinkedList<>();
      char[] wordArr = word.toCharArray();

      for(int i = 0; i < wordArr.length; i++) {  
          if(i == 0) {
            q = initializeQueue(node, q, wordArr[i]);
            if(q.size() == 0) return false;
            continue;
          }

          int qSize = q.size();
          if(qSize == 0) return false;

          if(wordArr[i] == '.') {
              for(int j = 0; j < qSize; j++) {
                  TrieNode currNode = q.poll();
                  for(TrieNode n: currNode.children.values()){
                      q.add(n);
                  }
              }
          } else {
              for(int j = 0; j <qSize; j++) {
                TrieNode currNode = q.poll();
                TrieNode newNode = currNode.children.get(wordArr[i]);
                if(newNode != null) {
                    q.add(newNode);
                }
              }
          }    
         
      }
      for(TrieNode n: q) {
          if(n.isEndOfWord) return true;
      }
      return false;
  }
}



public class wordDictionary {
  

  public static void main (String[] args) {
    Dictionary dict = new Dictionary();
    dict.addWord("dad");
    dict.addWord("mad");
    dict.addWord(("pad"));
    System.out.println(dict.search("bad"));
    System.out.println(dict.search(".ad"));
    System.out.println(dict.search("b.."));
  }
 
}
