# HTML Transformations go here

$("/html") {
  add_canonical_tag()
  rewrite_links()
  absolutize()
  rewrite_aspnet_scripts()

  add_assets()


  @import "sections/header.ts"
  @import "sections/footer.ts"

  @import "mappings.ts"

}
$$("#quoteContainer") {
  insert_top("div", id: "welcomeText")
}
$$("#welcomeText") {
    text() {
      append("Get a free quote on your travel. Select Single or Annual trip to get a quote. Get a free, instant quote.")
    }
  }
  $$("#quoteContainer"){
  insert_after("div", id:"customFooter")
  }
  $$("#customFooter"){
  text(){
  append("Terms and Conditions | Privacy Policy | About Us | Contact Us")
  }
  }
  $$("#customFooter"){
  insert_after("div", id:"customFooter2")
  }
  $$("#customFooter2"){
  text(){
  append("Make a Claim | Policy Renewals | FAQ's")
  }
  }
  
