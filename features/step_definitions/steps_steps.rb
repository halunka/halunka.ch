Given(/^I am on the "(.*?)" page$/) do |page|
  visit(page)
end

Then(/^I should see "(.*?)"$/) do |text|
  expect(page).to have_content(text)
end
