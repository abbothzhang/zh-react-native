//
//  SecondViewController.m
//  SampleApp
//
//  Created by albert on 15/5/4.
//  Copyright (c) 2015年 Facebook. All rights reserved.
//

#import "SecondViewController.h"
#import "RCTRootView.h"
@interface SecondViewController ()

@end

@implementation SecondViewController

- (void)viewDidLoad {
  [super viewDidLoad];
  NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/Examples/SampleApp/myRectNative.bundle"];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"SampleApp"
                                                   launchOptions:nil];
  self.view = rootView;
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];

}


@end
