//
//  MainViewController.m
//  SampleApp
//
//  Created by albert on 15/5/4.
//  Copyright (c) 2015年 Facebook. All rights reserved.
//

#import "MainViewController.h"
#import "RCTRootView.h"
#import "SecondViewController.h"

@interface MainViewController ()

@end

@implementation MainViewController

- (void)viewDidLoad {
  [super viewDidLoad];
  self.view.backgroundColor = [UIColor whiteColor];
  UIButton *jumpToSecVCBtn = [[UIButton alloc] initWithFrame:CGRectMake(10, 100, 200, 50)];
  [jumpToSecVCBtn setTitle:@"jumpToSecVC" forState:UIControlStateNormal];
  [jumpToSecVCBtn setTitleColor:[UIColor blueColor] forState:UIControlStateNormal];
  [jumpToSecVCBtn addTarget:self action:@selector(jumpToSecVC) forControlEvents:UIControlEventTouchUpInside];
  [self.view addSubview:jumpToSecVCBtn];
  
}

-(void)jumpToSecVC{
  SecondViewController *secVC = [[SecondViewController alloc] init];
  [self.navigationController pushViewController:secVC animated:YES];
}



- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}



@end
