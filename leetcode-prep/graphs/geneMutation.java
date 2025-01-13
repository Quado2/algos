/*
 * 
 * A gene string can be represented by an 8-character long string, with choices from 'A', 'C', 'G', and 'T'.

Suppose we need to investigate a mutation from a gene string startGene to a gene string endGene where one mutation is defined as one single character changed in the gene string.

For example, "AACCGGTT" --> "AACCGGTA" is one mutation.
There is also a gene bank bank that records all the valid gene mutations. A gene must be in bank to make it a valid gene string.

Given the two gene strings startGene and endGene and the gene bank bank, return the minimum number of mutations needed to mutate from startGene to endGene. If there is no such a mutation, return -1.

Note that the starting point is assumed to be valid, so it might not be included in the bank.

 

Example 1:

Input: startGene = "AACCGGTT", endGene = "AACCGGTA", bank = ["AACCGGTA"]
Output: 1
Example 2:

Input: startGene = "AACCGGTT", endGene = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
Output: 2
 

Constraints:

0 <= bank.length <= 10
startGene.length == endGene.length == bank[i].length == 8
startGene, endGene, and bank[i] consist of only the characters ['A', 'C', 'G', 'T'].
 * 
 * 
 * 
 */


import java.util.Arrays;
import java.util.Set;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.Objects;
import java.util.Queue;

class QElement {
  String gene;
  int steps;

  public QElement(String gene, int steps) {
    this.gene = gene;
    this.steps = steps;
  }

  @Override
  public String toString(){
    return "[" + this.gene + ", "+ this.steps + "]";
  }
}

class Solution {
  public static void main(String[] args) {

    String[] bank = {"AACCGGTA","AACCGCTA","AAACGGTA"};

     System.out.println(minMutation("AACCGGTT", "AAACGGTA",bank ));
  }


  public static int minMutation(String startGene, String endGene, String[] bank) {
    
    Set<String> bankSet = new HashSet<>(Arrays.asList(bank));
    Set<String> visitedGenes = new HashSet<>();

    Queue<QElement> q = new LinkedList<>();
    String geneMutations = "ACGT";
    q.add(new QElement(startGene, 0));
    visitedGenes.add(startGene);

    while(!q.isEmpty()) {

      var current = q.poll();
      String currGene = current.gene;
      int currSteps = current.steps;

      if(Objects.equals(currGene, endGene)) return currSteps;

      for(int i = 0; i < currGene.length(); i++) {
        for(int j = 0; j < geneMutations.length(); j++) {
          StringBuilder newGene = new StringBuilder(currGene);
          newGene.setCharAt(i, geneMutations.charAt(j));
          String newGeneString = newGene.toString();
          
          if(endGene == newGeneString) return currSteps + 1;
          if(bankSet.contains(newGeneString) && !visitedGenes.contains(newGeneString)) {
            visitedGenes.add(newGeneString);
            q.add(new QElement(newGeneString, currSteps+1));
          }
        }
      }
    
      
    }

    return -1;
  }
}