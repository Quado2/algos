transactions = [
  { category: "food", amount: 100 },
  { category: "clothing", amount: 50 },
  { category: "food", amount: 200 },
  { category: "entertainment", amount: 150 }
]

marks = {"Ramesh":23, "Vivek":40, "Harsh":88, "Mohammad":60}

ranked = marks.group_by do |mark, val|
  val > 30 ? "Passed": "Failed"
end

p ranked


