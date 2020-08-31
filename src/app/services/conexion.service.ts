import { Moroso } from './../interfases/moroso';
import { Pago } from './../interfases/pago';
import { Evento } from './../interfases/evento';
import { AreaComun } from './../interfases/areacomun';
import { CosaPerdida } from './../interfases/cosasPerdidas';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Aviso } from '../interfases/aviso';
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class ConexionService {
  // Avisos
  private avisosCollection: AngularFirestoreCollection<Aviso>;
  private avisos: Observable<Aviso[]>;
  private avisosDoc: Observable<Aviso[]>;
  // Esto se utiliza para el metodo deleteProducto
  private avisoDoc: AngularFirestoreDocument<Aviso>;

  // Cosas Perdidas
  private cosasPerdidasCollection: AngularFirestoreCollection<CosaPerdida>;
  private cosasPerdidas: Observable<CosaPerdida[]>;
  private cosasPerdidasDoc: Observable<CosaPerdida[]>;
  private cosaPerdidaDoc: AngularFirestoreDocument<CosaPerdida>;

  // Areas Comunes
  private areasComunesCollection: AngularFirestoreCollection<AreaComun>;
  private areasComunes: Observable<AreaComun[]>;
  private areasComunesDoc: Observable<AreaComun[]>;
  private areaComunDoc: AngularFirestoreDocument<AreaComun>;

  // Eventos
  private eventosCollection: AngularFirestoreCollection<Evento>;
  private eventos: Observable<Evento[]>;
  private eventosDoc: Observable<Evento[]>;
  private eventoDoc: AngularFirestoreDocument<Evento>;

  // Finanzas
  private finanzasCollection: AngularFirestoreCollection<Pago>;
  private finanzas: Observable<Pago[]>;
  private finanzasDoc: Observable<Pago[]>;
  private pagoDoc: AngularFirestoreDocument<Pago>;

  // Morosos
  private morososCollection: AngularFirestoreCollection<Moroso>;
  private morosos: Observable<Moroso[]>;
  private morososDoc: Observable<Moroso[]>;
  private morosoDoc: AngularFirestoreDocument<Moroso>;


  constructor(private _afs: AngularFirestore) {

    // Avisos
    this.avisosCollection = _afs.collection<Aviso>("avisos");
    this.avisos = this.avisosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Aviso;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    // Cosas Perdidas
    this.cosasPerdidasCollection = _afs.collection<CosaPerdida>("cosasperdidas");
    this.cosasPerdidas = this.cosasPerdidasCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as CosaPerdida;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    // Areas Comunes
    this.areasComunesCollection = _afs.collection<AreaComun>("areascomunes");
    this.areasComunes = this.areasComunesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as AreaComun;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    // Eventos
    this.eventosCollection = _afs.collection<Evento>("eventos");
    this.eventos = this.eventosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Evento;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    // Finanzas
    this.finanzasCollection = _afs.collection<Pago>("finanzas");
    this.finanzas = this.finanzasCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Pago;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    // Morosos
    this.morososCollection = _afs.collection<Moroso>("morosos");
    this.morosos = this.morososCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Moroso;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

  }

  // *************************   Avisos
  listaAvisos() {
    return this.avisos;
  }

  addAviso(avisos: Aviso) {
    this.avisosCollection.add(avisos);
  }

  deleteAviso(avisos) {
    this.avisoDoc = this._afs.doc<Aviso>(`avisos/${avisos.id}`);
    this.avisoDoc.delete();
  }

  editAviso(aviso) {
    //console.log("Aviso en editAviso: ", aviso);
    this.avisoDoc = this._afs.doc<Aviso>(`avisos/${aviso.id}`);
    this.avisoDoc.update(aviso);
  }

  // *************************   Cosas Perdidas
  listaCosasPerdidas() {
    return this.cosasPerdidas;
  }

  addCosaPerdida(cosasPerdidas: CosaPerdida) {
    this.cosasPerdidasCollection.add(cosasPerdidas);
  }

  deleteCosaPerdida(cosasPerdidas) {
    this.cosaPerdidaDoc = this._afs.doc<CosaPerdida>(`cosasperdidas/${cosasPerdidas.id}`);
    this.cosaPerdidaDoc.delete();
  }

  editCosaPerdida(cosaPerdida) {
    //console.log("Cosa Perdida en editCosaPerdida: ", cosaPerdida);
    this.cosaPerdidaDoc = this._afs.doc<CosaPerdida>(`cosasperdidas/${cosaPerdida.id}`);
    this.cosaPerdidaDoc.update(cosaPerdida);
  }

  // *************************   Areas Comunes
  listaAreasComunes() {
    return this.areasComunes;
  }

  addAreaComun(areasComunes: AreaComun) {
    this.areasComunesCollection.add(areasComunes);
  }

  deleteAreaComun(areasComunes) {
    this.areaComunDoc = this._afs.doc<AreaComun>(`areascomunes/${areasComunes.id}`);
    this.areaComunDoc.delete();
  }

  editAreaComun(areaComun) {
    //console.log("Area Comun en editAreaComun: ", areaComun);
    this.areaComunDoc = this._afs.doc<AreaComun>(`areascomunes/${areaComun.id}`);
    this.areaComunDoc.update(areaComun);
  }

  // *************************   Eventos
  listaEventos() {
    return this.eventos;
  }

  addEvento(eventos: Evento) {
    this.eventosCollection.add(eventos);
  }

  deleteEvento(eventos) {
    this.eventoDoc = this._afs.doc<Evento>(`eventos/${eventos.id}`);
    this.eventoDoc.delete();
  }

  editEvento(evento) {
    this.eventoDoc = this._afs.doc<Evento>(`eventos/${evento.id}`);
    this.eventoDoc.update(evento);
  }

  // *************************   Finanzas
  listaPagos() {
    return this.finanzas;
  }

  addPago(finanzas: Pago) {
    this.finanzasCollection.add(finanzas);
  }

  deletePago(finanzas) {
    this.pagoDoc = this._afs.doc<Pago>(`finanzas/${finanzas.id}`);
    this.pagoDoc.delete();
  }

  editPago(pago) {
    //console.log("Pagos en editPagosn: ", pago);
    this.pagoDoc = this._afs.doc<Pago>(`finanzas/${pago.id}`);
    this.pagoDoc.update(pago);
  }

  // *************************   Morosos
  listaMorosos() {
    return this.morosos;
  }

}
