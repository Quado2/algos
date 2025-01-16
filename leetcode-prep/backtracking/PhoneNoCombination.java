import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

class Solution {

  Map<Character, String> numberToLetter;

  public Solution(){
    this.numberToLetter = new HashMap<>();
    this.numberToLetter.put('2', "abc");
    this.numberToLetter.put('3', "def");
    this.numberToLetter.put('4', "ghi");
    this.numberToLetter.put('5', "jkl");
    this.numberToLetter.put('6', "mno");
    this.numberToLetter.put('7', "pqrs");
    this.numberToLetter.put('8', "tuv");
    this.numberToLetter.put('9', "wxyz");
  }


  public List<String> letterCombinations(String digits) {
    
    if(digits.length() == 0 || digits == null) return new ArrayList<>();

    List<String> result = new ArrayList<>();
 
    backTrack(result, new ArrayList<>(), 0, digits);

    return result;
  }

  public void backTrack(List<String> result, List<String> path, int index, String digits) {

    if(index == digits.length()) {
        result.add(path.stream().collect(Collectors.joining()));
        return ;
    }

    for(Character letter : this.numberToLetter.get(digits.charAt(index)).toCharArray()) {
        path.add(letter.toString());
        backTrack(result, path, index +1, digits);
        path.remove(path.size()-1);
    }
  }
}

public class PhoneNoCombination {
  public static void main(String[] args) {
    Solution solution = new Solution();
    System.out.println(solution.letterCombinations("23"));
  }
}
