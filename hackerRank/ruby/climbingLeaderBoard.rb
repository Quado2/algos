
def remove_duplicates(array)
  seen = Set.new
  unique_array = []

  array.each do |element|
    unless seen.include?(element)
      unique_array << element
      seen.add(element)
    end
  end

  unique_array
end

def climb(ranked, player)

  uniqRanked = remove_duplicates(ranked)
  i = player.size - 1;
  player_size = uniqRanked.size
  j = 0;
  ranks = [];

  while(i >= 0 && j < player_size) do
    if(player[i] >= uniqRanked[j])
      ranks.push(j+1)
      i -= 1
    else
      j += 1
    end
  end
  

  while(i >= 0)
    j += 1
    ranks.push(j);
    i -= 1;
  end

  return ranks.reverse
  
end

rank1 = [100, 90, 90,80]
play1 = [70, 80, 105]

rank2 = [100, 100, 50, 40,40, 20, 10]
play2 = [5, 25, 50, 120]

p climb(rank1, play1)
p climb(rank2, play2)
p climb([100], [])