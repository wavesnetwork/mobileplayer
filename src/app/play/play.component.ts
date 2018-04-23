import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit, OnDestroy {
	id: number;
	choice: number=0;
	entry: any;
	sub: any;
  	nodes: Array<any>;
  	pathway: Array<any>=[];
  	node: Array<any>;
  	progress: number;
  	content: any;
  	pathwaym: any;
	closeResult: string;


  constructor(
	private modalService: NgbModal,
  	private http: HttpClient,	
  	private route: ActivatedRoute	
  	) {}

	openp(pathwaym:any) {
	    this.modalService.open(pathwaym).result.then((result) => {
	      this.closeResult = `Closed with: ${result}`;
	    }, (reason) => {
	      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
	    });
	  }
	open(content:any) {
		console.log(this.node);
	    this.modalService.open(content).result.then((result) => {
	      this.closeResult = `Closed with: ${result}`;
	    }, (reason) => {
	      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
	    });
	  }

	  private getDismissReason(reason: any): string {
	    if (reason === ModalDismissReasons.ESC) {
	      return 'by pressing ESC';
	    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
	      return 'by clicking on a backdrop';
	    } else {
	      return  `with: ${reason}`;
	    }
	  }

	goToAction(){
		this.node = this.nodes.find( item => item.id==this.choice );
		this.pathway.push(this.node); // push the node in the pathway
		window.scroll(0,0);
	}

	onSelectionChange(entry: any){
		this.choice=entry;
	}


	ngOnInit() {
		    // this.sub = this.route.params.subscribe(params => {
	     //   this.id = +params['id']; // (+) converts string 'id' to a number
	       console.log('Play!!!');
	       this.sub = this.http.get('assets/vps/44/data.json')
	       .subscribe(data => {
			      // Read the result field from the JSON response.
			      console.log( data['nodes'] );
			      this.nodes = data["nodes"];
			      this.node = data["nodes"][0];
				  this.pathway.push(this.node); // push the node in the pathway
			    });
		}
	    

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}//end class 

