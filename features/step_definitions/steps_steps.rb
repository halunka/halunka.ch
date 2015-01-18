Given(/^I am on the "(.*?)" page$/) do |page|
  visit(page)
end

Then(/^I should see "(.*?)"$/) do |text|
  expect(page).to have_content(text)
end

Given(/^I click "(.*?)"$/) do |link|
  click_link(link) 
end

Given(/^I click on "(.*?)"$/) do |button|
  click_button(button)
end

Given(/^I fill in the contact form with valid data$/) do
  within("#contact") do
    fill_in 'name', :with => 'Foo'
    fill_in 'surname', :with => 'Bar'
    fill_in 'mail', :with => 'foo@bar.io'
    fill_in 'message', :with => 'Foo Bar Baz'
  end
end
