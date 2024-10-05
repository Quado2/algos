def is_valid?(s)
  s_map = Hash.new
  s.each_char do |chr|
    s_map[chr] = (s_map[chr] || 0) + 1
  end

  total_diff = 0;
  all_values = s_map.values;
  first_value = all_values.first

  all_values.each do |count|
    total_diff += (first_value - count).abs
  end

  response = "NO";

  if total_diff <= 1
    response = "YES"
  else
    ones_count = all_values.count(1);
    if(ones_count == 1)
      all_values.delete(1);
      new_diff = 0
      all_values.each do |count|
        new_diff += (first_value - count).abs
      end
      
      if(new_diff == 0)
        response = "YES"
      end
    end
  end
  
  response
end

p is_valid?("aabbccddeefghi")
p is_valid?("abc")
p is_valid?("abcc")
p is_valid?("abccc")
p is_valid?("ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd")
