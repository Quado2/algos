import java.util.HashMap;
import java.util.Map;

class TrieNode {
  Map<Character, TrieNode> children;
  boolean isEndOfWord;

  public TrieNode() {
    this.children = new HashMap<>();
    this.isEndOfWord = false;
  }


  @Override
  public String toString() {
    return super.toString();
  }
}

class Trie {

  private TrieNode root;

  public Trie () {
    this.root = new TrieNode();
  }


  public void insert(String word) {
    TrieNode node = root;
    for(char c: word.toCharArray()) {
      node.children.putIfAbsent(c, new TrieNode());
      node = node.children.get(c);
    }
    node.isEndOfWord = true;
  }

  public boolean search(String word) {
    TrieNode node = root;
    for(char c: word.toCharArray()) {
      node = node.children.get(c);
      if(node == null) return false;
    }

    return node.isEndOfWord;
  }

  public boolean startsWith(String word) {
    TrieNode node = root;
    for(char c: word.toCharArray()) {
      node = node.children.get(c);
      if(node == null) return false;
    }
    return true;
  }

  public boolean remove(String word) {
    return removeHelper(root, word, 0);
      }
    
    
  private boolean removeHelper(TrieNode node, String word, int depth) {
    if(word.length() == depth) {
      if(!node.isEndOfWord) return false;

      node.isEndOfWord = false;

      return node.children.isEmpty();
    }
    char letter = word.charAt(depth);
    TrieNode child = node.children.get(letter);
    if(child == null) return false;
    
    boolean shouldDelete = removeHelper(child, word, depth+1);

    if(shouldDelete) {
      node.children.remove(letter);
      return !node.isEndOfWord && node.children.isEmpty();
    }

    return false;
  }
  
}

public class TrieImplementation {
  public static void main (String[] args) {
    Trie trie = new Trie();
    trie.insert("car");
    trie.insert("cart");
    trie.insert("came");
    System.out.println(trie.startsWith("came"));
    System.out.println(trie.search("cam"));
    System.out.println(trie.search("came"));
    System.out.println(trie.remove("came"));
    System.out.println(trie.startsWith("ca"));
    System.out.println(trie.search("came"));
  }
}
