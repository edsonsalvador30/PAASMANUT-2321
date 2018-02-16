package app.entity;

import java.io.*;
import javax.persistence.*;
import java.util.*;
import javax.xml.bind.annotation.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonFilter;
import cronapi.rest.security.CronappSecurity;


/**
 * Classe que representa a tabela TESTES
 * @generated
 */
@Entity
@Table(name = "\"TESTES\"")
@XmlRootElement
@CronappSecurity
@JsonFilter("app.entity.testes")
public class testes implements Serializable {

  /**
   * UID da classe, necessário na serialização
   * @generated
   */
  private static final long serialVersionUID = 1L;

  /**
   * @generated
   */
  @Id
  @Column(name = "id", nullable = false, insertable=true, updatable=true)
  private java.lang.String id = UUID.randomUUID().toString().toUpperCase();

  /**
  * @generated
  */
  @Column(name = "attribute_01", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.lang.String attribute_01;

  /**
  * @generated
  */
  @Column(name = "attribute_02", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.lang.Integer attribute_02;

  /**
  * @generated
  */
  @Column(name = "attribute_03", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.lang.Long attribute_03;

  /**
  * @generated
  */
  @Column(name = "attribute_04", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.lang.Character attribute_04;

  /**
  * @generated
  */
  @Column(name = "attribute_05", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.lang.Double attribute_05;

  /**
  * @generated
  */
  @Temporal(TemporalType.TIME)
  @Column(name = "attribute_06", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.util.Date attribute_06;

  /**
  * @generated
  */
  @Temporal(TemporalType.DATE)
  @Column(name = "attribute_07", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.util.Date attribute_07;

  /**
   * Construtor
   * @generated
   */
  public testes(){
  }


  /**
   * Obtém id
   * return id
   * @generated
   */
  
  public java.lang.String getId(){
    return this.id;
  }

  /**
   * Define id
   * @param id id
   * @generated
   */
  public testes setId(java.lang.String id){
    this.id = id;
    return this;
  }

  /**
   * Obtém attribute_01
   * return attribute_01
   * @generated
   */
  
  public java.lang.String getAttribute_01(){
    return this.attribute_01;
  }

  /**
   * Define attribute_01
   * @param attribute_01 attribute_01
   * @generated
   */
  public testes setAttribute_01(java.lang.String attribute_01){
    this.attribute_01 = attribute_01;
    return this;
  }

  /**
   * Obtém attribute_02
   * return attribute_02
   * @generated
   */
  
  public java.lang.Integer getAttribute_02(){
    return this.attribute_02;
  }

  /**
   * Define attribute_02
   * @param attribute_02 attribute_02
   * @generated
   */
  public testes setAttribute_02(java.lang.Integer attribute_02){
    this.attribute_02 = attribute_02;
    return this;
  }

  /**
   * Obtém attribute_03
   * return attribute_03
   * @generated
   */
  
  public java.lang.Long getAttribute_03(){
    return this.attribute_03;
  }

  /**
   * Define attribute_03
   * @param attribute_03 attribute_03
   * @generated
   */
  public testes setAttribute_03(java.lang.Long attribute_03){
    this.attribute_03 = attribute_03;
    return this;
  }

  /**
   * Obtém attribute_04
   * return attribute_04
   * @generated
   */
  
  public java.lang.Character getAttribute_04(){
    return this.attribute_04;
  }

  /**
   * Define attribute_04
   * @param attribute_04 attribute_04
   * @generated
   */
  public testes setAttribute_04(java.lang.Character attribute_04){
    this.attribute_04 = attribute_04;
    return this;
  }

  /**
   * Obtém attribute_05
   * return attribute_05
   * @generated
   */
  
  public java.lang.Double getAttribute_05(){
    return this.attribute_05;
  }

  /**
   * Define attribute_05
   * @param attribute_05 attribute_05
   * @generated
   */
  public testes setAttribute_05(java.lang.Double attribute_05){
    this.attribute_05 = attribute_05;
    return this;
  }

  /**
   * Obtém attribute_06
   * return attribute_06
   * @generated
   */
  
  public java.util.Date getAttribute_06(){
    return this.attribute_06;
  }

  /**
   * Define attribute_06
   * @param attribute_06 attribute_06
   * @generated
   */
  public testes setAttribute_06(java.util.Date attribute_06){
    this.attribute_06 = attribute_06;
    return this;
  }

  /**
   * Obtém attribute_07
   * return attribute_07
   * @generated
   */
  
  public java.util.Date getAttribute_07(){
    return this.attribute_07;
  }

  /**
   * Define attribute_07
   * @param attribute_07 attribute_07
   * @generated
   */
  public testes setAttribute_07(java.util.Date attribute_07){
    this.attribute_07 = attribute_07;
    return this;
  }

  /**
   * @generated
   */
  @Override
  public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || getClass() != obj.getClass()) return false;
    testes object = (testes)obj;
    if (id != null ? !id.equals(object.id) : object.id != null) return false;
    return true;
  }

  /**
   * @generated
   */
  @Override
  public int hashCode() {
    int result = 1;
    result = 31 * result + ((id == null) ? 0 : id.hashCode());
    return result;
  }

}
